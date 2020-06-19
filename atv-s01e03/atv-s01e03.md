# Engenharia da Computação - Sistemas Distribuídos
> Otavio Cesar da Costa dos Santos - UFMA

- Atividade S01E03 - Síntese Tipos de Sistemas Distribuídos e Pesquisa de Middlewares

---
## Tipos de Sistemas Distribuídos e Pesquisa de Middlewares
---

### Sistemas de Computação Distribuídos

- Utilizados para tarefas de computação de alto desempenho 

- Uma classe importante de Sistemas Distribuídos está configurada para Computação de Alto Desempenho, que por sua vez pode ser subdividida em: Computação em Cluster e Computação em Grid.

**Cluster** 

- Os sistemas computacionais são consistidos de um coleção de estações de trabalho similares, fortemente conectadas por uma rede de alta velocidade com um nó funcionando como gerenciador.

- Virtualmente em todos os casos, computação em cluster é utilizada para programação paralela na qual um único programa é executado em paralelo em múltiplas máquinas.

- Linux-based Beowulf Cluster - uma parte importante do “middleware” é constituída por bibliotecas responsáveis pela execução de programas em paralelo. Neste contexto, muitas destas bibliotecas provêem comunicação baseada em mensagens, mas não são hábeis para
tratar processos defeituosos, segurança, etc.

- MOSIX – disponibiliza uma única imagem de sistema para o “cluster”, ou seja, oferece para cada processo transparência completa pois se comporta com um simples computador. 

**Grade (Grid)** 

- Construído como uma federação de sistemas computacionais, onde cada sistema está sob um domínio adminstrativo e, portanto, pode contemplar heterogeneidade de “hardware”, “software” e tecnologia de rede.

- Tipicamente, recursos consistem de servidores(e.g., incluindo supercomputadores), “storages” e bancos de dados.

- Dispositivos de rede especiais tais como sensores podem ser também contemplados.

- Considerando tais aspectos, a concepção de Computação em Grid envolve acesso a recursos de diferentes domínios administrativos e, através de usuários e aplicações que pertençam a uma organização virtual específica.

- Para permitir colaborações, Grids geralmente usam organizações virtuais.

- Em essência, um grupo de usuários (IDs) que permitem gerenciar autorizações e alocação de recursos.

- Por esta razão, a Aquitetura Proposta por Foster et al

     - “Fabric Layer” - disponibiliza interfaces para recursos locais em “sites” específicos (note que estas interfaces são adaptadas para permitir compartilhamento dentro de uma organização virtual).

     - “Connectivity Layer” - consiste de protocolos de comunicação para suportar transações em “grid” que necessitem utilizar múltiplos recursos.

     - Adicionalmente, contempla protocolos de segurança para autenticar usuários e recursos.

     - “Resource Layer” - responsável pelo gerenciamento de recurso, assim utiliza as funções disponibilizadas pela camada de conectividade e invoca diretamente as interfaces disponibilizadas pela camada de fábrica.
     
     - “Collective Layer” - consiste de serviços para descorberta e alocação de recursos bem como escalonamento de tarefas sobre múltiplos recursos, dados replicados e etc.
     - Por oferecer uma larga gama de serviços na organização virtual, esta camada de protocolos diferentes para diferentes propósitos.

     - “Application Layer” - consiste de aplicações que operam dentro da organização virtual e as quais são responsáveis pelo ambiente de computação em “grid”.

### Sistemas de Informação Distribuídos

- Outra importante classe de sistemas distribuídos é encontrada em organizações que foram confrontadas com a qualidade das aplicações de rede, mas para as quais a interoperabilidade acabou por se tornar a experiência dolorosa.

- Processamento de Transações  

- Integração de Aplicações Empresarias (EAI – Enterprise Application Integration)  

- Podemos distinguir vários níveis de integração:
          - Integração no baixo nível – pode contemplar o agrupamento de requisições em uma requisição maior de modo que seja
          executada como uma transação distribuída;
          - Integração de alto nível - “enterprise application integration”

### Sistemas Distribuídos Pervasivos

- Sistemas Distribuídos em que nós são pequenos, mantidos por bateria, móveis, passíveis de conexão através de rede sem fio e geralmente embutidos em um sistema maior.

- Domésticos 
- Eletrônicos  para  Tratamento  de  Saúde 
- Redes de Sensores

- Requisitos para Aplicações Pervasivas (Difusas):
          - Troca contextual – o sistema é parte de um ambiente em que mudanças devem ser rapidamente percebidas.
          - Composição ad hoc – cada nó pode ser usado de diferentes formas por diferentes usuários, no entanto, requer facilidade de configuração;
          - Compartilhamento é o padrão – nós entram e saem provendo serviço compartilhado e informação.
          
- Home Systems – devem contemplar a auto configuração e o auto gerenciamento, ou seja, não deve ser necessário a existência de um administrador e o sistema ao mesmo tempo deve prover espação pessoal para cada usuário.

- Health Care Systems – são sistemas equipados com sensores organizados sobre o corpo humano (BAN – Body Area Network).

- Um requisito importante é o de não impedir ou limitar os movimentos da pessoa, ou seja, ausência de fios ligados aos dipositivos/sensores da rede.

- Estes requisitos conduzem a 02 cenários: hub central com parte da rede; todos os componentes/sensores ligados preferencialmente via rede sem fio a uma rede externa.

- Estes requisitos conduzem a 02 cenários: hub central com parte da rede; todos os componentes/sensores ligados preferencialmente via rede sem fio a uma rede externa.

### Middleware

**O que é?** 

- Camada de software que permite a comunicação entre aplicações (distribuídas)

- Um conjunto de serviços que fornece comunicação e distribuição de forma transparente à aplicação

- Componentes
          - ambiente de programação
          - ambiente de execução
 
 **Contexto** 

- O middleware está localizado entre as camadas de aplicação e transporte
- O middleware implementa seus próprios protocolos
          - Protocolos que suportam os serviços fornecidos pelo middleware (ex., protocolos de autenticação)
          
 **Serviços Fornecidos** 
 
- Comunicação
          - esconde os detalhes da rede (ex. Chamada de procedimento remoto,invocação de objeto.)
- Serviço de nomes
          - ex., páginas brancas
- Transações
          - ex., atomicidade
- Segurança
          - a camada de middleware deve implementar mecanismos de segurança
          
**Modelos**

- Middleware orientado à transação

- Remote Procedure Call

- Middleware reflexivo

- Middleware baseado em eventos

- Middleware orientado a objetos

- Middleware orientado a mensagem

- Middleware multimídia

- Middleware para sistema móveis          
