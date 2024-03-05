const Contato = require('./modelo.js')
const readline = require('readline-sync');

const contatos = [];


function listarContatos() {
    contatos.forEach(contato => console.log(contato.nome,'-', contato.email,'-', contato.telefone));
  }
  
  function adicionarContato() {
    const nome = readline.question("Informe o nome do contato: ");
    const email = readline.question("Informe o email do contato: ");
    const telefone = readline.question("Informe o telefone do contato: ")
    const novo = new Contato(nome, email, telefone)
    contatos.push(novo);
  }
  
  function buscarContato() {
    const nome = readline.question("Informe o nome do contato: ");
    const buscaContato = contatos.find(contato => contato.nome === nome);
    if(buscaContato){
      console.log(buscaContato.nome, '-', buscaContato.email,'-', buscaContato.telefone);
      return buscaContato;
    }else{
      console.log("Contato não localizado");
    }
  
  }
  
  function atualizarContato() {
    const buscaContato = buscarContato();
    if(buscaContato){
      const telefone = readline.question("Informe o novo telefone do contato: ");
      buscaContato.telefone = telefone;
      const email = readline.question("Informe o novo email do contato: ");
      buscaContato.email = email;
    }else{
      console.log("Contato não localizado");
    }
  }
  
  function removerContato() {
    const nome = readline.question("Informe o nome do contato: ");
    const posicao = contatos.findIndex(contato=> contato.nome === nome);
    console.log("Contato removido.")
    if (posicao>=0) {
      contatos.splice(posicao, 1);
    }else{
      console.log("Contato não localizado");
    }
  }

  module.exports = {listarContatos, adicionarContato, buscarContato, atualizarContato, removerContato}
