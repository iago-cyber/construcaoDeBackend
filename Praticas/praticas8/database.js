const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://iagoasantos:<password>@cluster0.gxlvwxg.mongodb.net/';

let db = null;

async function conectarDb(){
    if(db){
        return db;
    }
    const cliente = new MongoClient(url);
    await cliente.connect();
    db = cliente.db('agenda');
    return db;
}

module.exports = {conectarDb};