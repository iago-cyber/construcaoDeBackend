const produtos = [];

function listarTodos(req,res) {
    res.json(produtos);
}

function exibir(req,res){
    const { produto } = req;
    res.json(produto);
}

function buscarPeloId(req, res, next) {
    const {produtoId}= req.params;
    const encontrado = produtos.find(item => item.id == produtoId);

    if(encontrado){
        req.produto = encontrado;
        next();
    }else{
        res.status(404).json({msg:"Produto não encontrado."});
    }
}

function validarDados(req, res, next) {
    const {nome, preco} = req.body;
    if(nome && preco){
        next();
    }else{
        res.status(422).json({msg: "Nome e preço são obrigatorios"})
    }
}

function criar(req,res) {
    const {nome,preco}=req.body;
    const novo = {id: produtos.length+1, nome, preco};
    produtos.push(novo);
    res.status(201).json(novo);
}

function atualizar(req,res) {
    const {produtoId}= req.params;
    const encontrado = produtos.find(item => item.id == produtoId);

    const {nome, preco} = req.body;
    encontrado.nome = nome;
    encontrado.preco = preco;
    res.json(encontrado);
}

function remover(req,res) {
    const {produtoId}= req.params;
    const posicao = produtos.findIndex(item => item.id == produtoId);

    produtos.splice(posicao,1);
    res.status(204).end();
}

module.exports = {listarTodos, exibir, buscarPeloId, validarDados, criar, atualizar, remover}