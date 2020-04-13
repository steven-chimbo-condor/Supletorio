const express = require('express'),
    rutas= express.Router(),
    persona= require('../Controlador/controladorPersona');


const pregunta=require('../models/Personas');
    
rutas.use('/obtener',persona);






module.exports=rutas;