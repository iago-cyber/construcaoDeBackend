const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://iagoasantos:<password>@cluster0.gxlvwxg.mongodb.net/'

async function conectar (){
    const mongoclient = await MongoClient.connect(url);
    //criando banco loja
    const db = mongoclient.db('loja');
    return db;
}

async function inserir(cliente){
    const db = await conectar();
    const clientes = db.collection('clientes');
    return clientes.insertOne(cliente);
}

async function listar(){
    const db = await conectar();
    const clientes = db.collection('clientes');
    return clientes.find({}).toArray();
}

async function atualizar(){
    const db = await conectar();
    const clientes = db.collection('clientes');
    clientes.updateOne({_id:''},{$set: {nome:'jose maria'}});
}

async function remover(){
    const db = await conectar();
    const clientes = db.collection('clientes');
    clientes.deleteOne({_id:''});
}

inserir({nome:'jose', telefone:'8888'});
