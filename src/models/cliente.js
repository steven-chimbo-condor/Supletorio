var mongoose = require('mongoose');
    Schemas = mongoose.Schema;

var usuarioSchema = new Schemas({
    
    Nombre:{type:String,trim:true},
    Apellido:{type:String,trim:true},
    Cedula:{type:String,trim:true},
    Edad:{type:String,trim:true},
    Telefono:{type:String,trim:true},
    Direccion:{type:String,trim:true},
})

var cliente= mongoose.model('Usuario',usuarioSchema);



module.exports=cliente;