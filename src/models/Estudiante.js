var mongoose = require('mongoose');
    Schemas = mongoose.Schema;

var StadySchema = new Schemas({
    
    dni:{type:String,trim:true},
    names:{type:String,trim:true},
    email:{type:String,trim:true},
    phone:{type:String,trim:true},
    direccion:{type:String,trim:true},
    genero:{type:String,trim:true},
})

var estudiante= mongoose.model('Usuario',StadySchema);



module.exports=estudiante;