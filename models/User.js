const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength: 3,
        maxlength:50,
        index: true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        minlength:5,
        maxlength:255,
        index:true
    },
    password:{
        type: String,
        rquired:true,
        minlength:6,
        maxlength:1024,
        index:true
    },
    isManager:{
        type:Boolean,
        default:false,
        index:true
        //son hal,i gardas
    }
});



const User = mongoose.Model("User", UserSchema);

exports.User = User;