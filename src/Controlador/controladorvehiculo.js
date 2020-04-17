//doy dos puntos par salir de carpeta e ingresar a otra 
var vehiculo= require('../models/vehiculo'),
    express = require('express'),
    persona = require('../models/cliente'),
    rutas= express.Router();

    //creo rutas atraves de metodos get y post
rutas.get('/',(req , res)=>{
    vehiculo.find({},(err, docs)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(docs);
    })

}).post('/crear',(req , res)=>{
    var body= req.body;
    vehiculo.insertMany({
        //inserto los datos a bd
        Placa: body.Placa,
        Modelo: body.Modelo,
        Color: body.Color,
        Marca: body.Marca,
        id_person:body.id_person,
    },(err,rest)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
    //metodo para eliminar
}).post('/eliminar', (req, res )=>{
    vehiculo.remove({Placa: req.body.Placa},(err,docs)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })
        //metodo de editar
    }).post('/editar',(req, res)=>{
        var body = req.body;
        vehiculo.update({_id: req.body._id,},
            {
                $set:{ 
                    Placa: body.Placa,
                    Modelo: body.Modelo,
                    Color: body.Color,
                    Marca: body.Marca, 
                    id_person: body.id_person    
                }
            },(err,rest)=>{
                if(err){
                    console.error(err)
                    throw err;
                }
                res.status(200).json(rest)
            })
    }).get('/all',(req,res)=>{
    persona.find({},(err,resp)=>{
        vehiculo.find({},(err, rep)=>{
            resp.forEach(data=>{
                rep.forEach(data2=>{
                    if(data._id==data2.id_person){
                        data2.nombre=data.Nombre                        
                    }
                })
            })
            
        res.send(rep);
        })
    })
})

module.exports= rutas;