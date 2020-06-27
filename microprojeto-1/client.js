var readline = require('readline');
const net = require('net');
var resp = "";


var cardapio2  = [
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

// cria objeto do tipo socket utilizado para
// realizar comunicação entre cliente e servidor
const socket = net.Socket();

// função que trata todos os eventos da conexão no cliente
function realizaConexao () {
    // imprime msg na tela
    console.log("Conectado!");
    console.log("Seja bem vindo ao restaurante!\n");
    console.log("Ações: \n\n 0 - Cadastrar um novo item no cardápio \n 1 - Montar um pedido  \n 2 - Exluir Item \n\n");

    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    leitor.question("Escolha uma das ações acima! \n", function(answer) {
        var resp = answer;
        
        if (resp == "0") {
        leitor.question("Insira o nome do item! \n", function(answer) {
            var resp = answer;
            socket.write(resp);   
            leitor.close 
        });   
        }

        if (resp == "1") {
        console.log("Cardapio: \n\n c - " + cardapio2[0].name + "\n p - " + cardapio2[1].name + "   \n m - "+ cardapio2[2].name + "\n h - "+ cardapio2[3].name + " \n\n");                           
        leitor.question("Escolha uma das letras de opções disponíveis no menu! \n", function(answer2) {
            var resp2 = answer2;
            socket.write(resp2);   
            leitor.close 

            leitor.question("Confirma adicionar no carrinho (s/n)? \n", function(answer3) {
                var resp3 = answer3;
                if (resp3 == "s") {
                socket.write(resp3); 
                leitor.close   
                }
                if (resp3 == "n") {
                    leitor.close 
                } 
            });   
        });   

        }
        
        if (resp == "2") {
        console.log("Cardapio: \n\n c - " + cardapio2[0].name + "\n p - " + cardapio2[1].name + "   \n m - "+ cardapio2[2].name + "\n h - "+ cardapio2[3].name + " \n\n");                               
        leitor.question("Escolha um dos itens para exluir! \n", function(answer4) {
            var resp4 = answer4 + "e";
            socket.write(resp4); 
            leitor.close   
        });   
        }
    });

    // código que executa quando dados são recebidos
    socket.on("data", function (dados) {
        const resposta = dados.toString().trim();

        // imprime mensagem recebida
        console.log(resposta);

        // encerro a conexão
        socket.end();
    });
}

// realiza a conexão com o servidor
socket.connect(2000, "127.0.0.1", realizaConexao);
