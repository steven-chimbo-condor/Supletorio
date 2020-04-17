var mongoose = require('mongoose');
    Schemas = mongoose.Schema;

var vehiculoSchema = new Schemas({
    
    Placa:{type:String,trim:true},
    Modelo:{type:String,trim:true},
    Color:{type:String,trim:true},
    Marca:{type:String,trim:true},
    id_person:{type:String,trim:true},
    nombre:{type:String,trim:true}
})

var vehiculo= mongoose.model('Vehiculo',vehiculoSchema);



module.exports=vehiculo;