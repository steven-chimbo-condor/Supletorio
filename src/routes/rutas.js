const express = require('express'),
    rutas= express.Router(),

    Login= require('../Controlador/controladorLogin');

    Cliente= require('../Controlador/controladorCliente');

  


rutas.use('/obtener',Login);

rutas.use('/mostrar',Cliente);



module.exports=rutas;