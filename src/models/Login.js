var mongoose = require('mongoose');
    Schemas = mongoose.Schema;

var loginSchema = new Schemas({
    //creo el esquema 
    Cedula:{type:String,trim:true},
    Contrasena:{type:String,trim:true},
})


//creo una variable y le asigno el esquema
//le doy un dombre de la tabla
var Login = mongoose.model('Login',loginSchema);




//exporto mi tabla qeu creo 
module.exports= Login;

