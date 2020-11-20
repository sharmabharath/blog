const express = require('express');
const { check } = require('express-validator');

const customersController = require('../controllers/customer-controller');

const router = express.Router();

router.get('/', customersController.getCustomers);

router.post(
  '/signup',
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail() // Test@test.com => test@test.com
      .isEmail(),
    check('password').isLength({ min: 6 }),
    check('mobileNo').isLength({ min: 10 })
  ],
  customersController.signup
);

router.patch(
  '/:pid',
  [
      check('name')
          .not()
          .isEmpty(),
      check('email')
          .normalizeEmail() // Test@test.com => test@test.com
          .isEmail(),
      check('password').isLength({ min: 6 }),
      check('mobileNo').isLength({ min: 10 })
  ],
  customersController.updateCustomer
);
 
router.post('/login', customersController.login);

router.delete('/:pid', customersController.deleteCustomer);

module.exports = router;
