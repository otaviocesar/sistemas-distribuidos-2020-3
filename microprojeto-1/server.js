const net = require('net');

// função que trata todos os eventos da conexão no servidor
function trataRequisicoes (socket) {
    // imprime mensagem ao conectar
    console.log("Conexão realizada!");

    // código que executa quando a conexão é encerrada
    socket.on("end", function () {
        console.log("Conexão finalizada!");
    });

    // código que executa quando dados são recebidos
    socket.on("data", function (dados) {
        const comando = dados.toString();

        // testa quais os tipos de comandos válidos recebidos
        switch (comando) {
            case "0":
                socket.write("\nO seguinte item inserido com sucesso: \n");
                //adicionar no array aqui
                break;

            case "1":
                socket.write("\nSua escolha é: '" + acoes[1].name + "\n");
                break;

            case "2":
                socket.write("\nSua escolha é: '" + acoes[2].name + "\n");
                socket.write("\nInsira o Nome do Item: \n");
                break;

            case "c":
                socket.write("\nSua escolha é: '" + cardapio[0].name + "\n" 
                +"Acompanhamentos: " + cardapio[0].acompanhamentos + "\n"
                +"Preço: " + cardapio[0].preço + "\n");
                break;                

            case "p":
                socket.write("\nSua escolha é: '" + cardapio[1].name + "\n" 
                +"Acompanhamentos: " + cardapio[0].acompanhamentos + "\n"
                +"Preço: " + cardapio[0].preço + "\n");
                break;

            case "m":
                socket.write("\nSua escolha é: '" + cardapio[2].name + "\n" 
                +"Acompanhamentos: " + cardapio[0].acompanhamentos + "\n"
                +"Preço: " + cardapio[0].preço + "\n");
                break;

            case "h":
                socket.write("\nSua escolha é: '" + cardapio[3].name + "\n" 
                +"Acompanhamentos: " + cardapio[0].acompanhamentos + "\n"
                +"Preço: " + cardapio[0].preço + "\n");
                break;

            case "s":
                socket.write("\nAdicionado no carrinho com sucesso!");
                break; 
            
            case "ce":
                socket.write("\nChurrasco Excluido com sucesso!");
                break; 

            case "pe":
                socket.write("\nPeixe Excluido com sucesso!");
                break;  

            case "me":
                socket.write("\nMacarronada Excluido com sucesso!");
                break;   
        
            case "he":
                socket.write("\nHamburguer Excluido com sucesso!");
                break;                                                    

            default:
                const c = comando.split(" ");

                if (c[0] === "MENSAGEM") {
                    socket.write("Bom dia " + c[1]);
                } else {
                    socket.write("COMANDO DESCONHECIDO");
                }
                
        }
    });
}

// cria servidor
const server = net.createServer(trataRequisicoes);

// escuta em porta de rede
server.listen(2000, "127.0.0.1");

var cardapio  = [
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

   var acoes  = [
    {id: '0',
     name: 'Cadastrar um novo item no cardápio'
    },
     
    {id: '1',
     name: 'Montar um pedido'
    },
     
    {id: '2',
     name: 'Exluir Item'
    },
   ]

