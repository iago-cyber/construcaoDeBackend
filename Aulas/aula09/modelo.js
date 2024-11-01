const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome:{type: String, trim:true, unique: true, uppercase: true, required: [true, 'Nome é obrigatorio'], minLength: [3, "Nome deve ter no minimo 3 caracteres"]},
    preco: {type: Number, required: [true, "Preço é obrigatorio"], min:[0, "Valor minimo do preço é ZERO"]},
    quantidade: {type: Number, default:0}
});

module.exports = mongoose.model('Produto', produtoSchema);
