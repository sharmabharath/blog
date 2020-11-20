const { validationResult } = require('express-validator');
var jwt = require('jwt-simple');
var secret = "ASecretKeyHere";

const HttpError = require('../routes/Helpers/http-error');
const Customer = require('../models/customer');
 

const getCustomers = async (req, res, next) => {
  let customers;
  try {
    customers = await Customer.find({}, 'email name mobileNo');
  } catch (err) {
    const error = new HttpError(
      'Fetching customers failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({customers: customers.map(customer => customer.toObject({ getters: true }))});
};

const signup = async (req, res, next) => {
  console.log(req.body);
  
  const { firstname,lastname, mobileNo, email, password } = req.body;

  let existingCustomer
  try {
    existingCustomer = await Customer.findOne({ mobileNo: mobileNo }) // Todo : add email id as well for existing users
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }
  
  if (existingCustomer) {
    const error = new HttpError(
      'Customer exists already, please login instead.',
      422
    );
    return next(error);
  }
  
  const createdCustomer = new Customer({
    firstname,
    lastname,
    mobileNo,
    email,
    password,
  });

  try {
    await createdCustomer.save();
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({customer: createdCustomer.toObject({ getters: true })});
};

const login = async (req, res, next) => {

  
  const { mobileNo, password } = req.body;

  let existingCustomer;

  try {
    existingCustomer = await Customer.findOne({ mobileNo: mobileNo})
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!existingCustomer || existingCustomer.password !== password) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }

  var token= jwt.encode(req.body,secret);

  res.status(200).json({ customer: existingCustomer.toObject({ getters: true }),
token: token });
};

const updateCustomer = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
      );
  }

  const { firstname,lastname, mobileNo, email, password } = req.body;
  const customerId = req.params.pid;
  let customer;
  try {
      customer = await Customer.findById(customerId);
  } catch (err) {
      const error = new HttpError(
          'Something went wrong, could not update customer.',
          500
      );
      return next(error);
  }

  customer.firstname = firstname;
  customer.lasstname = lastname;
  customer.mobileNo = mobileNo;
  customer.email = email;
  customer.password = password;
  try {
      await customer.save();
  } catch (err) {
      const error = new HttpError(
          'Something went wrong, could not update customer.',
          500
      );
      return next(error);
  }

  res.status(200).json({ customer: customer.toObject({ getters: true }) });
};


const deleteCustomer = async (req, res, next) => {
  const customerId = req.params.pid;
  let customer;
  try {
    customer = await Customer.findById(customerId).populate('customer');
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete customer.',
      500
    );
    return next(error);
  }

  if (!customer) {
    const error = new HttpError('Could not find customer for this id.', 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await customer.remove({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete customer.',
      500
    );
    return next(error);
  }

  res.status(200).json({ message: 'Deleted customer.' });
};

exports.getCustomers = getCustomers;
exports.signup = signup;
exports.login = login;
exports.deleteCustomer = deleteCustomer;
exports.updateCustomer = updateCustomer;
//exports.updateCustomerWithCars = updateCustomerWithCars;
