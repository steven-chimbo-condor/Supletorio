const express = require('express'),
    rutas= express.Router(),
    persona= require('../Controlador/controladorPersona');


const pregunta=require('../models/Personas');
    
rutas.use('/obtener',persona);

rutas.get('/html', (req, res)=>{
    const preguntas= pregunta.find();
    console.log(preguntas);
    res.render('index');
});


rutas.post('/add', async (req, res)=>{
    const pregunta = new pregunta (req.body);
    await pregunta.save();

    res.send('resivido');
});

module.exports=rutas;