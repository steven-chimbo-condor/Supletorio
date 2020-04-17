const express = require('express'),
    rutas= express.Router(),

    Login= require('../Controlador/controladorLogin');

    Cliente= require('../Controlador/controladorCliente');

    Vehiculo= require('../Controlador/controladorvehiculo');


rutas.use('/obtener',Login);

rutas.use('/mostrar',Cliente);

rutas.use('/ver',Vehiculo);


module.exports=rutas;