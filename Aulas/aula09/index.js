require('dotenv').config();
const mongoose = require('mongoose');
const Produto = require('./modelo');

const url = process.env.MONGODB_URL;

async function main(){
    try {
        await mongoose.connect(url);
        console.log('Conectou.');
    } catch (err) {
        console.log("Deu ruim!\nFaz o L!!!!!!!!!\n ", err.message);
    }
   
    // //inserir
    // const produto = new Produto({nome: "banana", preco: 12.0, quantidade: 5});
    // try {
    //     await produto.save();  
    // } catch (err) {
    //     console.log(err.errors['preco'].message)
    // } 
    // //alterar
    // produto.nome = "maca prata";
    // produto.preco = 20,5;
    // produto.quantidade = 10;
    // await produto.save();
    try {
        
        const produtoNovo = await Produto.create({nome: "uva", preco: 31.5, quantidade: 5});
        console.log(produtoNovo);
    } catch (err) {
        for(let key in err.errors){
            console.log(err.errors[key].message);
        }
    }

    const produtoAtualizado = await Produto.findOneAndUpdate({nome: "maca prata"}, {nome: "mexirica", preco:16.0, quantitade:2});
    console.log(produtoAtualizado);

    const produtoConsultado = await Produto.findOne({nome: "uva"});
    console.log(produtoConsultado);

    const produtoRemovido = await Produto.findOneAndDelete({nome:"uva"});
    console.log(produtoRemovido);

    await mongoose.disconnect();
}

main();