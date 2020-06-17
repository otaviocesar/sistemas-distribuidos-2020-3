# Engenharia da Computação - Sistemas Distribuídos
> Otavio Cesar da Costa dos Santos - UFMA

- Atividade S01E01 - Síntese dos conceitos e caracterização de sistemas distribuídos

---
## Conceitos e caracterização de sistemas distribuídos
---
![](https://github.com/otaviocesar/sistemas-distribuidos-2020-3/blob/master/imagens/sistemas-distribuidos.png?raw=true)

**Conteúdo**

### Definição

- Um sistema (operacional) distribuído é aquele que aparece para os usuários como um sistema (operacional) centralizado ordinário, mas que é executado em múltiplas CPUs independentes. O conceito chave é transparência, ou seja, o uso de múltiplos processadores deve ser invisível (transparente) para o usuário. Pode-se dizer que o sistema é visto como um uniprocessador virtual, e não como uma coleção de máquinas distintas.

> "*Coleção de computadores independentes 
> que aparecem para os usuários do sistema como 
> um único computador.” (Tanenbaum & van Steen).*"

> "*Uma coleção de elementos de processamento 
> interconectados, tanto logicamente como fisicamente, 
> para execução cooperativa de programas de aplicação 
> com o controle geral dos recursos centralizado. 
> (M. Eckhouse)*"

> "*Um sistema em que componentes de hardware e software 
> localizados em computadores em rede se comunicam e coordenam 
> suas ações por passagem de mensagens. (Coulouris et al)*"

#### Definição de Coulouris enfatiza:
+ Devem estar conectados através de uma rede
+  Não precisam estar localizados em uma única sala, ou mesmo próximos entre si
+ Não há limite para a área abrangida por um sistema desse tipo
+  Computadores devem estar equipados com software de sistemas distribuídos
      + Usuários vêem o sistema como uma entidade única, integrada 
      + Embora esteja funcionando em computadores diferentes, situados em locais diversos
         
### Histórico

1. De 1945 a 1985
   - Computadores de grande porte e alto custo
   - Trabalhavam de modo independente – não havia confiabilidade na
comunicação
2. De 1985 em diante
   - Microcomputadores com maior poder computacional
     - CPU 8, 16, 32 e 64 bits
     - HyperThreading e MultiCore (devido à limitação de 3.4 GHz na freqüência)
     - Nota: Lançado esta semana processador de 80 core (1.01 TFlops)
         - Pentium M 1.4GHz – 149 MFlops     
   - Redes de alta velocidade
     - Local Area Network – LAN
     - Wide Area Network – WAN  

### Características e Conceitos

- **Vários componentes conectados via uma rede**
- **Compartilhamento de recursos**
- **Transparência**
    - O sistema deve ser visto como um todo e não como uma colecção de componentes distribuídos.
- **Flexibilidade ou Escalabilidade**
    - Sistemas distribuídos são capazes de crescimento incremental.
    - Idealmente, sistemas distribuídos não devem ter qualquer componente centralizado (cuja capacidade impõe limites para o tamanho máximo de um sistema), tal que a restrição ao crescimento não deve existir.
- **Migração** 
    - Esconde que um recurso pode se mover para outra localização.
- **Relocação** 
    - Esconde que um recurso pode ser movido para outra localização enquanto está em uso.   
- **Confiabilidade**
    - Disponibilidade é apenas um aspecto de confiabilidade
        - SDs têm capacidade de replicação e redundância
    - O sistema deve ser capaz de se recuperar de falhas
- **Desempenho**
    - Permite que o sistema seja reconfigurado para melhorar o seu desempenho sem que os utilizadores percebam. 
- **Acesso**
    - Operações idênticas para acesso local e remoto.
- **Localização**
    - O usuário não precisa saber onde estão os recursos
- **Concorrência**
    - Recursos podem ser disputados sem conhecimento do usuário
- **Replicação**
    - Não é necessário saber quantas cópias do recurso existem. 
    - Utilização de várias instâncias de um componente pode ocorrer por razões de desempenho ou de confiabilidade.
- **Tolerância a falhas**
    - Esconde a falha e recuperação de um recurso. Garante tolerância a falhas, facilitando a manutenção e aumentando a segurança, já que cada nó é independente.
- **Migração**
    - Recursos podem mudar de lugar sem a alteração de nomes
- **Paralelismo** 
    - Várias atividades podem ocorrer simultaneamente sem o conhecimento dos usuário 
-	**Interoperabilidade:** capacidade de interação entre aplicações e componentes distintos através de um padrão 
-	**Portabilidade:** capacidade de execução de uma aplicação em diversos sistemas sem modificação.
-	**Transparência da distribuição:** garante a apresentação ao usuário como um único sistema, podendo ser aplicado em diversos aspectos dentro do sistema. Para tanto, utiliza-se de Middleware que conecta os módulos do sistema em uma única camada, sendo essa a apresentada ao usuário.

- **Sistema Aberto (“Openness”)**
    - Capacidade de o sistema ser extensível, quer em hardware quer em software
        - Novos componentes devem poder ser adicionados sem por em causa o funcionamento dos já existentes, e poder comunicar com eles 
    - Para isso é importante que:
        - Sejam conhecidas as interfaces dos novos componentes através da publicação da sua documentação
        - Utilizar protocolos e formatos standard


### Exemplo de Sistema Distribuido (Netflix)

![](https://github.com/otaviocesar/sistemas-distribuidos-2020-3/blob/master/imagens/netflix.png?raw=true)

### Vantagens

+ Compartilhamento de dados: base de dados comum;
+ Compartilhamento de dispositivos: acesso compartilhado a
periféricos;
+ Comunicação: torna-se mais simples e mais rápida a
comunicação entre pessoas. Além disso, é possível:
transferência de arquivos entre nós, login remoto, etc;
+ Flexibilidade: dividir a carga de trabalho entre os nós da rede;
+ Confiabilidade: se um nó falha os demais poderão continuar
operando;
+ Velocidade de computação: maior poder computacional obtido
através de concorrência. Há a possibilidade de distribuir uma
computação particionada a vários nós para executarem
concorrentemente;
+ Performance a baixo custo: preço baixo dos PCs;
+ Escalabilidade: aumentar o número de nó

### Desvantagens

+ Software
    + Falta de experiência
    + Mudança de Paradigma
    + Conhecimento sobre a distribuição
    + Quanto deve ser feito pelo sistema e quanto pelo usuário?
+ Rede
    + Perda de mensagens
    + Sobrecarga na comunicação
    + Dimensionamento da rede
+ Segurança
    + Autenticação, credenciais, bloqueios
