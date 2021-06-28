const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile : {
        type: String,
        required: true,
        maxlength: 10,
        minlength:10
    },
    email:{
        type: String,
        required:true,
    
    },
    password: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema)