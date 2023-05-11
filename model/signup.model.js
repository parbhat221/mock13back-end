const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    email:{type:String, unique:true},
    password:String,
}, {versionKey:false});

const SignupModel = mongoose.model('signup', signupSchema);

module.exports = {SignupModel};