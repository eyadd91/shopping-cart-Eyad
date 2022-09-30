const mongoose = require('mongoose') ;
//const bcrypt = require('bcrypt') ;
const bcrypt =require('bcryptjs');
const userSchema = mongoose.Schema({
    email : {
        type : String ,
        required : true

    } ,
    password : {
        type : String ,
        required : true

    } ,

    userName : {
        type : String ,
    } ,

    contact : {
        type : Number ,
    } ,
     
    address : {
        type : String ,
    }
})

userSchema.methods.hashPassword = function(password){
    return bcrypt.hashSync(password , bcrypt.genSaltSync(5) ,null)
}

userSchema.methods.comparePassword = function(password) {
    return  bcrypt.compareSync(password,this.password );
}


module.exports = mongoose.model('User' , userSchema) ;