
const express = require('express');

const router = express.Router();

const produtos = [{id: 1, nome: "uva", preco: 25.00}];

router.get("/produtos", function(req, res){
  res.json(produtos);
});

router.get("/produtos/:produtoId", function(req, res){
  const encontrado = produtos.find(produto => produto.id == req.params.produtoId);

  if (!encontrado) {
    res.status(404).send({});
    return;
  }
  
  res.json(encontrado);
});

router.post("/produtos", function(req, res) {
  if (req.body && req.body.nome && req.body.preco) {
    const novo = {id: produtos.length+1, nome: req.body.nome, preco: req.body.preco}
    produtos.push(novo);
    res.status(201).json(novo);
    return;
  }

  res.status(422).send({});
});

router.put("/produtos/:produtoId", function(req, res){
 const encontrado = produtos.find(produto => produto.id == req.params.produtoId);

 if (!encontrado) {
   res.status(404).send({});
   return;
 }

 encontrado.nome = req.body.nome;
 encontrado.preco = req.body.preco;

 res.json(encontrado);
});

router.delete("/produtos/:produtoId", function(req, res){
  const posicao = produtos.findIndex(produto => produto.id == req.params.produtoId);

  if (posicao < 0) {
    res.status(404).send({msg: "Produto não encontrado"});
    return;
  }
    
 produtos.splice(posicao, 1);
 
 res.status(204).end();
});

module.exports = router;

