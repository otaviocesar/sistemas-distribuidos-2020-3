var mqtt = require('mqtt')
var client  = mqtt.connect({ host: 'localhost', port: 8888 })

const readline = require('readline');
const { exception } = require('console');
const { STATUS_CODES } = require('http');
const cli_id = "cli:"

client.on('connect', function () {

  var readlineSync = require('readline-sync');

  console.log("Menu: ", menu);
  console.log("Escolha um dos itens disponíveis no menu: ");

  while (true) {
    input = readlineSync.prompt();
    console.log('Adicionar ao carrinho? ');
    if (input > menu.length-1){
      console.log('Tente novamente.');
    } else {
      client.publish('order-init', cli_id + JSON.stringify(menu[input]));
    }
    
  }
  console.log('Adicionando ao carrinho.');

  client.publish('list-order', cli_id);
  
  client.publish('end-order', cli_id);
  
  client.end();
});

client.on('message', function(topic, message){
  
  const CHART_LIST = 'list-order';
  const END_ORDER = 'end-order';

  var message_str = message.toString()
  var check = true
  
  if (message_str.substring(0, 4) == cli_id) {
    check = false
  } else {
    message_str = message_str.substring(4)
  }

  if (check) {
    switch(topic) {
      case CHART_LIST:
        // const list = JSON.parse(message);
        console.log('O pedido final é: ', message_str);
        break;
      case END_ORDER:
        console.log(message_str)
        break;
    }   
  }
});

//Base de Dados
const menu  = [
  {id: '0',
   name: 'Churrasco',
   itens : 3,
   preço: 'R$ 10',
   acompanhamentos : ['arroz','farofa','vinagrete']
  },
   
  {id: '1',
   name: 'Peixe',
   itens : 4,
   preço: 'R$ 13',
   acompanhamentos : ['arroz','feijão', 'salada', 'molho']
  },
   
  {id: '2',
   name: 'Macarronada',
   itens : 2,
   preço: 'R$ 8',
   acompanhamentos : ['catchup','maionese']
  },
   
  {id: '3',
   name: 'Hamburguer',
   itens : 5,
   preço: 'R$ 11',
   acompanhamentos : ['salada','carne','pão', 'molho', 'bacon']
  },
 ]

client.subscribe('list-order', function(err) {
  if (!err){
    console.log("Subscrito em 'list-order'");
    };
});

  
client.subscribe('end-order', function(err) {
  if (!err){
    console.log("Subscrito em 'end-order'");
    };
  });