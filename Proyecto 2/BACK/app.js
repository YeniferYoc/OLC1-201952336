var express = require('express');
var morgan = require('morgan');
var cors = require('cors');
var app= express();
var corsOpecions = {origin:true, optionsSuccesStatus:200};

var incremental = 0;
app.use(morgan( 'dev'));
app.use(express.json());
app.use(cors(corsOpecions));
app.use(express.urlencoded({extended:true}));

app.listen(8080, function(){
    console.log("Servidor levantado");
})

app.get('/', function(req, res){
    res.json({mensaje: "hola mundo"})

})
app.get('/incre', function(req, res){

    res.json({incre: incremental})

})
app.post('/set_incremental', function(req, res){
    incremental = req.body.incremental;
    console.log(incremental);
    res.json({incre: incremental})

})
app.post('/run', function(req, res){
    var texto = req.body.texto;
    console.log(texto)
    res.json({mensaje:"ejecucion exitosa"})
})

