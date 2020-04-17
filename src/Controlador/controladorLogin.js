//doy dos puntos par salir de carpeta e ingresar a otra 
var persona= require('../models/Login'),
    express = require('express'),
    rutas= express.Router();

    //creo rutas atraves de metodos get y post 
rutas.get('/',(req , res)=>{
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
        Cedula: body.Cedula,
        Contrasena: body.Contrasena,   
    },(err,rest)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
    //metodo para eliminar
}).post('/eliminar', (req, res)=>{
    persona.remove({Cedula: req.body.Cedula},(req,res)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
        //metodo de editar
    }).post('/editar',(req, res)=>{
        var body = req.body;
        persona.update({Cedula: body.Cedula},
            {
                $set:{
                    Contrasena:body.Contrasena,
                    
                }
            },(err,rest)=>{
                if(err){
                    console.error(err)
                    throw err;
                }
                res.status(200).json(rest)
            })
    })
}).post('/Login', (req,res )=>{
    const {Cedula,Contrasena}=req.body;
    persona.find({
        Cedula:Cedula,
        Contrasena:Contrasena
    },(err, docs)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(docs);
    }) 
})

module.exports= rutas;