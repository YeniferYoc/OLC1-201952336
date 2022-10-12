var express = require('express');
var morgan = require('morgan');
var cors = require('cors');
var app= express();
var corsOpecions = {origin:true, optionsSuccesStatus:200};


app.use(morgan( 'dev'));
app.use(express.json());
app.use(cors(corsOpecions));
app.use(express.urlencoded({extended:true}));

app.listen(8080, function(){
    console.log("escuchando en el puerto 8080");
})

app.get('/', function(req, res){
    res.json({mensaje: "hola mundo"})

})
app.post('/set_incremental', function(req, res){
    var incremental = req.body.incremental;
    console.log(incremental)
    res.json({mensaje:"operacion con exito"})
})