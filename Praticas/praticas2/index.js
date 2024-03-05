const readline = require('readline-sync');
const controlador = require('./controlador.js');

function menu() {
  console.log('1. Adicionar');
  console.log('2. Listar');
  console.log('3. Buscar');
  console.log('4. Atualizar');
  console.log('5. Remover');
  console.log('6. Sair');
}

function escolherOpcao(opcao) {
  switch(opcao) {
    case '1':controlador.adicionarContato(); break;
    case '2':controlador.listarContatos(); break;
    case '3':controlador.buscarContato(); break;
    case '4':controlador.atualizarContato(); break;
    case '5':controlador.removerContato(); break;
    case '6': process.exit(0);
    default : console.log('Opção inválida');
  }
}

function main() {
  while(true) {
    menu();
    const opcao = readline.question("Entre com uma opção: ");
    escolherOpcao(opcao);
  }
}

main();