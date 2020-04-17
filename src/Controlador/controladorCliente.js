//doy dos puntos par salir de carpeta e ingresar a otra 
var usuario= require('../models/cliente'),
    express = require('express'),
    rutas= express.Router();

    //creo rutas atraves de metodos get y post
rutas.get('/',(req , res)=>{
    usuario.find({},(err, docs)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(docs);
    })

}).post('/crear',(req , res)=>{
    var body= req.body;
    usuario.insertMany({
        //inserto los datos a bd
        Nombre: body.Nombre,
        Apellido: body.Apellido,
        Cedula: body.Cedula,
        Edad: body.Edad,
        Telefono: body.Telefono,
        Direccion: body.Direccion,
    },(err,rest)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
    //metodo para eliminar
}).post('/eliminar', (req, res)=>{
    persona.remove({Nombre: req.body.Nombre},(req,res)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
        //metodo de editar
    }).post('/editar',(req, res)=>{
        var body = req.body;
        persona.update({Nombre: body.Nombre,},
            {
                $set:{
                    Apellido: body.Apellido,
                    Cedula: body.Cedula,
                    Edad: body.Edad,
                    Telefono:body.Telefono,
                    Direccion: body.Direccion,   
                }
            },(err,rest)=>{
                if(err){
                    console.error(err)
                    throw err;
                }
                res.status(200).json(rest)
            })

    })
}).post('/mostar', async(req , res)=>{
    const Usuarios = await usuario.find({})
     
    Usuarios
})


module.exports= rutas;