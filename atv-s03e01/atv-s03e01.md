# Engenharia da Computação - Sistemas Distribuídos
> Otavio Cesar da Costa dos Santos - UFMA

- Atividade S03E01 - Síntese Comunicação de Grupos

---
## Comunicação de Grupos

- Modelos Anteriores - Comunicação envolvia somente duas partes.
- RPC não permite comunicação de um processo com vários outros
- Grupo é uma coleção de processos que agem juntos em um sistema, de tal forma que quando uma mensagem é enviada para o grupo, todos os membros do grupo a recebem.
- Comunicação ponto-a-ponto
- Comunicação um-para-vários
- Grupos são dinâmicos. Novos grupos podem ser criados e grupos existentes podem ser eliminados. 
- Um processo pode entrar para o grupo ou o deixáo. Um processo pode ser membro de diversos grupo simultaneamente
- A implementação Depende do Hardware:
- Multicasting: Endereço especial que múltiplas máquinas podem receber (224.x.x.x – 239.x.x.x)
- Implementação é direta - basta atribuir a cada grupo um endereço multicasting diferente

- Broadcasting: Pacotes contendo certos endereços são enviados para todas as máquinas. Menos eficiente que multicasting (todas as máquinas recebem as mensagens enviadas por broadcasting e o software precisa verificar se o pacote é para ele). Também necessita somente um pacote para atingir todos os membros do grupo.
- Unicasting: Transmissão separada de pacote para cada membro do grupo (n membros, n pacotes necessários)
- Hierarquico:
- Vantagem- decisões mais rápidas
- Desvantagem - a perda do coordenador para o grupo todo.
- Servidor de Grupo: criação e eliminação de grupos e permissão para processos aderir ou abandonar grupos.
- Monta uma base de dados com informações dos grupos (ponto crítico de falha)
- Outra forma é fa-er o gerenciamento de forma distribuída.
- Quando um processo deixa o grupo, envia uma mensagem de “goodbye” para todos os outros membros.
- Problema: Se um membro falha ele deixa o grupo sem o “goodbye”. Os outros membros tem que descobrir isso experimentalmente e removê-lo do grupo

### Atomicidade

- Quando uma mensagem é enviada para um grupo, ela chega corretamente para todos os membros do grupo ou não chega para nenhum membro.
- Uma maneira de ter certeza que todos os destinatários receberam a mensagem é implementar o envio do ACK para cada mensagem recebida (Sem falhas esse método funciona)
- Com falhas - processo que envia msg inicia timers e envia retransmissões quando necessário. Quando um processo recebe uma msg, e não a havia visto ainda, envia a msg para todos os membros do grupo – problema: sobrecarga.

### Ordenando Mensagens

A ordenação de mensagens é um ponto muito importante na comunicação em grupo e assim vamos detalhar mais este assunto baseado nos conceitos de ordenação de mensagens em serviços de broadcast (BROADCAST, 1997), (ATTIYA, 1998), (MULLENDER, 1993), e também no sist ema AMOEBA (KAASHOEK, 1993). Existem quatro tipos diferentes de ordenação que normalmente estão implementadas nos mecanismos de comunicação de grupo:

- **Sem Ordem** – Onde as mensagens são enviadas ao grupo sem a preocupação de ordenamento. Tem o menor overhead pois não necessita controle algum de seqüência porém pode não ser adequado para muitas aplicações.
- Ordenamento FIFO – Garante que todas as mensagens de um membro sejam entregues aos demais membros do grupo na ordem em que elas foram enviadas. Para todas as mensagens M1 e M2 e todos os processos Pi e Pj, se Pi envia M1 antes de enviar M2, então M2 não é recebida em Pj antes que M1 seja recebida.

- **Ordenamento CAUSAL** – No ordenamento causal introduz-se o conceito de mensagem dependente de outra. Um exemplo par a ilustrar, é quando se recebem mensagens de uma lista na Internet. Um membro da lista envia uma pergunta para a lista, esta mensagem é enviada a todos os membros da lista. Na seqüência alguém responde a solicitação e esta resposta também é enviada a todos. Na caixa postal de um participante da lista chega primeiro a mensagem com a resposta e mais tarde a mensagem com a pergunta. No ordenamento causal as mensagens estão em ordenamento FIFO e se um membro após receber a mensagem A envia uma mensagem B, é garantido a todos os membros do grupo que vão receber A antes de B. Para todas as mensagens M1 e M2 e cada processo Pi, se M1 acontece antes de M2 então M2 não é recebida em Pi antes que M1 seja. A Figura 25 apresenta um exemplo gráfico de ordenamento causal. Nesta execução duas mensagens são controladas em termos de entrega. Primeiro a mensagem de p1 (0,2,0) é atrasada até que a mensagem anterior (0,1,0) chegue vinda de p1. Depois a mensagem (1,3,0) vinda de p0 é atrasada até que a mensagem (0,3,0) vinda de p1 (que aconteceu antes) tenha chegado.


- **Ordenamento Total** – No ordenamento total cada membro do grupo recebe todas as mensagens na mesma ordem. Para todas as mensagens M1 e M2 e todos os processos Pi e Pj, se M1 é recebida em Pi antes que M2 seja, então M2 não é recebida em Pj antes que M1 seja. Este ordenamento total é o melhor de todos aqui apresentados e torna a programação fácil, mas é difícil de ser implementado.

- Global Time Ordering - todas as mensagens chegam na ordem exata em que foram enviadas (não é facil de ser implementado)
- Consistent Time Ordering - se duas mensagens são enviadas em tempos próximos, o sistema pega uma delas como sendo a “primeira” e envia a todos os membros do grupo segundo esta ordem (é garantido que as mensagens cheguem a todos os membros do grupo na mesma ordem; que podem não ser a ordem real)

### Peer 2 Peer

- Aplicações Peer-to-peer distribuem a informação entre seus nós membros em lugar de concentrar em um único servidor.
- Não há a necessidade de nenhum elemento coordenador ou centrali-ador de recursos ou políticas
- Existe um certo grau de anonimato para o proprietário do recurso
- Todos os nós membros possuem a mesma capacidade de compartilhar informação com os demais membros da rede (todos seriam ao mesmo tempo clientes e servidores de dados).
- Cada usuário torna seu repositório de informações disponível para distribuição e pode estabelecer conexão direta com outro usuário.
- No modo de operação cliente/servidor tem-se o acesso aos dados e ao índice centralizados no servidor.
- No modo de operação puramente P2P tanto os dados quanto o índice são distribuídos.
- Escalabilidade Global
- Imensas quantidades de hosts conectados à rede
- Milhares de objetos e dezenas de milhares de hosts
- Balanceamento de carga
- Distribuição equalitária entre os peers
- Possibilidade de download de diferentes peers, em função de sua carga
- Otimização das interações locais entre peersvizinhos
- Idéia é buscar vizinhos mais “próximos”, evitando a
latência da comunicação

### Requisitos de Peer to Peer

- Dinamicidade dos hosts
- Peers podem entrar e sair do sistema a qualquer momento
- Quando entram, devem ser integrados ao sistema global
- Quando saem (voluntariamente ou não) o próprio sistema deve detectar e adequar a nova carga
- Segurança dos dados em um ambiente heterogêneo
- Autenticação, criptografia, necessidade de membros da “Rede P2P”
- Anonimato, capacidade de Negação e resistência à censura
- Capacidade de negar o compartilhamento de um arquivo
- Possibilidade de não realizar download de conteúdo protegido

### Aplicações

- Aplicações de Computação Distribuída muitas vezes se enquadram na categoria P2P tal como SETI@home que utiliza milhões de clientes Internet para procura de vida extraterrestre. É implementado como um screen saver (setiathome.ssl.berkeley.edu)
- Outras aplicações nesta categoria incluem sistemas para modelagem financeira, bioinformática, teste de desempenho Web. Estes sistemas aproveitam o tempo ocioso da máquina dos clientes para realizar computações de forma distribuída.
- Aplicações colaborativas também costumam ser consideradas na categoria P2P. Entre estas aplicações se incluem os “Instant Messenger” e salas de Chat ou “White Board”.
- Nas aplicaçãos colaborativas existe interação entre clientes em torno de uma atividade comum que podem ser jogos ou simulações.
- Um exemplo é o “White Board”que é uma aplicação onde cada cliente pode alterar desenhos ou textos e todos os demais visualizam e podem também fazer alterações.

### Estudo de Caso: Napster

- 1o sistema Peer to Peer a ser altamente popularizado
- Troca exclusiva de músicas, principalmente em formato MP3
- Funciona usando uma arquitetura centralizada
- Servidor de índice, que concentra todas as pesquisas
- Cada peer, ao ser iniciado, torna-se um servidor de arquivos
- Exporta seus índices ao servidor central do Napster
- Mantém a lista de todos os Peers disponíveis
- Cliente que deseja realizar uma pesquisa, envia a query ao Servido Central do Napster
- Este identifica o peer que contém a música com as palavras-chaves da busca
- A troca é feita entre o cliente e o servidor
- Servidor do Napster funciona como um “Binder”
