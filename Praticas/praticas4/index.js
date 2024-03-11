const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send("Você fez uma requisição GET");
    res.status(200).end();
});

app.post('/', function(req, res){
    res.status(201).send("Você fez uma requisição POST");
})

app.put('/', (req,res) => {
    res.send("Você fez uma requisição PUT");
    res.status(200).end();
})

app.delete('/', (req,res) => {
    res.status(204).end();
});

app.listen(3000, function(){
    console.log("API está ON!");
});

module.exports = app;