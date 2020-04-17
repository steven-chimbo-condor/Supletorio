const express = require("express");
const morgan= require("morgan");
const cors = require("cors");
const body_parser =require('body-parser');
var connection = require('./ConexcionDB/conexionBD');
const app= express();//inicializo express
const rutas = require('../src/routes/rutas')


app.use(cors());

//configraciones
app.set('port', process.env.PORT || 3000);


//middlewares

app.use(body_parser.json());

app.use(body_parser.urlencoded({extended:false}));



app.use(morgan('dev'));
//usamos las rutas

app.use(rutas);

//vistas


//esta corriendo el servidor
app.listen(app.get('port'), () =>{
console.log ('servidor inicio en el puerto 3000');
});