var mongoose = require('mongoose');
    Schemas = mongoose.Schema;

var valorSchema = new Schemas({
    //creo el esquema 
    Cedula:{type:String,trim:true},
    Contrasena:{type:String,trim:true},
    

})
//creo una variable y le asigno el esquema
//le doy un dombre de la tabla
var persona = mongoose.model('Persona',valorSchema);

//exporto mi tabla persona
module.exports= persona;