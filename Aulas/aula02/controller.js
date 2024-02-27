const readline = require('readline-sync');
const contato = require('./model.js')

const contatos = [];


function listar() {
    contatos.forEach(contato => console.log(contato.nome,'-', contato.telefone));
    readline.question("Pressiona ENTER para continuar");
  }
  
  function criar() {
    const nome = readline.question("Informe o nome do contato: ");
    const telefone = readline.question("Informe o telefone do contato: ")
    const novo = new contato(nome, telefone)
    contatos.push(novo);
    readline.question("Pressiona ENTER para continuar");
  }
  
  function buscar() {
    const nome = readline.question("Informe o nome do contato: ");
    const buscaContato = contatos.find(contato => contato.nome === nome);
    if(buscaContato){
      console.log(buscaContato.nome, '-', buscaContato.telefone);
    }else{
      console.log("Contato não localizado");
    }
  
  }
  
  function atualizar() {
    const nome = readline.question("Informe o nome do contato: ");
    const buscaContato = contatos.find(contato => contato.nome === nome);
    if(buscaContato){
      const telefone = 
        readline.question("Informe o novo telefone do contato: ");
        buscaContato.telefone = telefone;
    }else{
      console.log("Contato não localizado");
    }
  }
  
  function remover() {
    const nome = readline.question("Informe o nome do contato: ");
    const posicao = contatos.findIndex(contato=> contato.nome === nome);
    console.log("Contato removido.")
    if (posicao>=0) {
      contatos.splice(posicao, 1);
    }else{
      console.log("Contato não localizado");
    }
  }

  module.exports = {listar, criar, buscar, atualizar, remover}
