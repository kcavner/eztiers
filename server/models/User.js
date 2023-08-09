const {Schema,model,Types} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})