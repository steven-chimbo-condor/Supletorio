//doy dos puntos par salir de carpeta e ingresar a otra 
var persona= require('../models/Personas'),
    express = require('express'),
    rutas= express.Router();

    //creo rutas atraves de metodos get y post
rutas.post('/',(req , res)=>{
    persona.find({},(err, docs)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(docs);
    })

}).post('/crear',(req , res)=>{
    var body= req.body;
    persona.insertMany({
        //inserto los datos a bd
        idPersona: body.idPersona,
        Nombre: body.Nombre,
        Apellido: body.Apellido,
    },(err,rest)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
    //metodo para eliminar
}).post('/eliminar', (req, res)=>{
    persona.remove({idPersona: req.body.idPersona},(req,res)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
        //metodo de editar
    }).pos('/editar',(req, res)=>{
        var body = req.body;
        persona.update({idPersona: body.idPersona},
            {
                $set:{
                    Nombre:body.Nombre,
                    Apellido: body.Apellido,
                }
            },(err,rest)=>{
                if(err){
                    console.error(err)
                    throw err;
                }
                res.status(200).json(rest)
            })

    })
})

module.exports= rutas;