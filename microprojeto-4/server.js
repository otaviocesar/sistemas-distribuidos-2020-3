var mqtt = require('mqtt')
var server  = mqtt.connect({ host: 'localhost', port: 8888 })

var srv_id = 'srv:'

const order = [];

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

server.subscribe('list-order', function(err) {
  if (!err){
    console.log("Subscrição em 'list-order'");
  };
});

server.subscribe('end-order', function(err) {
  if (!err){
    console.log("Subscrição em 'end-order'");
  };
});

server.subscribe('init-order', function(err) {
  if (!err){
    console.log("Subscrição em 'init-order'!");
  };
});

server.on('message', function(topic, message){
   const CHART_LIST = 'list-order';  
   const INIT_ORDER = 'init-order';
    const END_ORDER = 'end-order';

    var message_str = message.toString()
    var check = true
    
    if (message_str.substring(0, 4) == srv_id) {
      check = false
    } else {
      message_str = message_str.substring(4)
    }
  
    if (check) {
      switch(topic) {
        case INIT_ORDER:
            var l = message_str
            order.push(l);
            break;
        case CHART_LIST:
            console.log(order)
            server.publish(CHART_LIST, srv_id + order.toString());
            break;
        case END_ORDER:
            soma = 0;
            order.forEach(function(d) {
                aux = JSON.parse(d)
                soma += aux.preco;
            })
            server.publish(END_ORDER, srv_id + 'O preço final é: ' + soma);
            break;
      }
    }
});
