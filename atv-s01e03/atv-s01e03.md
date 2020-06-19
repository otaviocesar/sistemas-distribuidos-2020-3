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

– Virtualmente em todos os casos, computação em cluster é utilizada para programação paralela na qual um único programa é executado em paralelo em múltiplas máquinas.

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

**Sistemas de Informação Distribuídos** 
- Processamento de Transações  
- Integração de Aplicações Empresarias (EAI – Enterprise Application Integration)  

**Sistemas Distribuídos Pervasivos**   
- Domésticos 
- Eletrônicos  para  Tratamento  de  Saúde 
- Redes de Sensores
