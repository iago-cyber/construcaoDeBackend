const modelo = require('./modelo');

async function buscarContato(nome){
    const contato = new modelo.Contato(nome);
    return await modelo.buscar(contato);
}

async function incluirContato(nome, email, telefone){
    const contato = new modelo.Contato(nome, email, telefone);
  return modelo.inserir(contato);
}

async function atualizarContato(nome, email, telefone){
    const contato = await buscarContato(nome);
    if(contato){
        contato.nome = nome;
        contato.email = email;
        contato.telefone = telefone;
    }
    return await modelo.alterar(contato);
}

async function removerContato(nome){
    const contato = buscarContato(nome);
  return contato;
}

module.exports= {incluirContato, buscarContato, atualizarContato, removerContato};