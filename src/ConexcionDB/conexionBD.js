var mongoose = require('mongoose');//requiero el mongo bd

var connection = mongoose.connect('mongodb+srv://Chimbomba:Loja1998@cluster0-aksgn.mongodb.net/test?retryWrites=true&w=majority');//conecto a la db

mongoose.connection.on('open',(ref)=>{
    console.log('Conectado a la base de datos');

});

module.exports=connection;