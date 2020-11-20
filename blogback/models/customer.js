const mongoose = require('mongoose');
 

const Schema = mongoose.Schema;


const customerSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String},
    mobileNo: { type: Number, required: true, minlength: 10 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
     
});

 

module.exports = mongoose.model('Customer', customerSchema);


