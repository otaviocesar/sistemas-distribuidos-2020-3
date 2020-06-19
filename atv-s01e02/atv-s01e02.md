# Engenharia da Computação - Sistemas Distribuídos
> Otavio Cesar da Costa dos Santos - UFMA

- Atividade S01E02 - Síntese Classificação de Hardware com várias CPUs

---
## Classificação de Hardware com várias CPUs
---

### Definição

- Os sistemas distribuídos são constituidos de várias CPUs interconectadas, porém há várias formas que o hardware pode ser organizado. Há algumas classificões existentes, há uma muito utilizada pois leva em considerando o número de fluxo de instruções e o número de fluxo de dados, a seguir é mostrada esta classificação.

### Características e Conceitos

**Taxonomia	– Flynn**
- Quatro “modos” de processamento classificando:
- Como é o processamento de instruções
- Quais são os dados de entrada de cada processador
- Single Instruction, Single Data – SISD
- Single Instruction, Multiple Data – SIMD
- Multiple Instruction, Single Data – MISD
- Multiple Instruction, Multiple Data – MIMD   

**SISD − Single Instruction Single Data**
    - Fluxo de instruções e dados único é a característica dos uniprocessadores tradicionais; 
    -  Single instruction stream, single data stream
    - Modo “convencional” no paradigma de Von Neumann
    - Uma CPU
    - Uma unidade de memória
    - Conectados por bus
    
**SIMD - Single Instruction Stream, Multiple Data Stream**
    - Processamento: múltiplos processadores homogêneos.
    - Mesma instrução.
    - Itens de dados distintos.
    - Processamento de arrays e matrizes.
    - Co-processamento (MMX, SSE).

**MISD - Multiple Instruction Stream, Single Data Stream.**
    - Operações diferentes
    - Mesmo dado

**MIMD − Multiple instruction Stream, Multiple Data Stream.**
    - Caracteriza−se por vários processadores intercnectados. Tanembau [1995] apresenta uma classificação, onde os dois primeiros são definidos em relação a organização da memória e os últimos em relação a forma de interconexão:
    - Instruções diferentes.
    - Dados diferentes.
    - Modo de operação de sistemas distribuídos e paralelos em geral.
    - Sem relógio comum.

- Multiprocessador − maquinas MIMD com memória compartilhada (um único espaço de endereçamento virtual compartilhado por todas as CPUs);

- Multicomputador − maquinas que não possuem memória compartilhada, isto é, cada processador possui sua memória privada.
        - Barramento − um único cabo, rede, barramento ou outro meio que conecte todas as máquinas.
        - Switch − existem cabos individuais conectando maquina a maquina, com vários padrões possíveis.
    - Há um a outra forma muito usada de classificação que é:  
        - Fortemente acoplado (Tighly coupled): comunicação rápida entre processadores (grande número de bitis por segundo.
        - Fracamente Acoplado ( loosely Coupled): atraso na troca de mensagens entre as máquinas é muito alto.
        - Um Multicomputador pode ser homogêneo ou heterogêneo, ou seja, os componentes do sistema podem ser idênticos ou não. A heterogeneidade neste caso refere-se apenas à diferença nas velocidades de operação entre os componentes similares do sistema, que são funcionalmente iguais. 
        
             ![](https://github.com/otaviocesar/sistemas-distribuidos-2020-3/blob/master/imagens/mimd.png?raw=true)
             
         
   
- **Multiprocessadores baseados em barramento**

Consiste em um número de CPUs (que pode ter alguma memória local - cache) ligadas através de um barramento. Sem caches locais, o barramento tende a ser sobrecarregado rapidamente. Solução: adicionar caches locais. Novo problema: A coerência dos dados que estão armazenados em cada cache é fundamental. Cache write-trough: Toda escrita na cache acarreta em escrita na memória. Escritas sempre geram tráfego no barramento, enquanto que leituras só geram tráfego quando a palavra não está na cache (cache miss). Para manter  consistência, as outras caches escutam o barramento e invalidam as posições que são escritas por outras caches na memória (snoopy caches). Um design deste tipo é coerente e invisível ao programador. É um esquema difícil de funcionar com um grande número de processadores.

- **Multiprocessadores com switch**

Podem ser usados com barras cruzadas ou com pontos de cruzamento. Memórias são localizadas de um lado e os processadores do outro. Caminho em uma comunicação é switched e a memória em questão tem o acesso bloqueado para os outros processadores. Número de switches pode tornar custo do sistema proibitivo. Rede ômega diminui número de switches necessários de n2 para n log2n. O retardo em redes ômegas com muitos níveis pode se tornar considerável, ou o seu custo caso switches ultra-rápidos sejam utilizados. Solução: contruir um sistema que use uma hierarquia de memórias. Um design deste tipo é o NonUniform Memory Access (NUMA) onde cada CPU tem uma memória local além de memórias que server a várias CPUs. O retardo diminui, mas a localização de software se torna crucial para o bom funcionamento do sistema.

- **Multicomputadores baseados em barramento**

Conjunto de CPUs com memória local trocando mensagens através de um barramento. Rede local ou CPUs conectadas com um barramento rápido.

- **Multicomputadores com switch.**

CPUs tem um certo número de conexões para outras CPUs e mensagens são trocadas através de CPUs que intermediam a comunicação quando necessário. Abaixo estão as topologias de grid e hipercubo. No grid, número de conexões e número máximo de passos em uma comunicação cresce com a raiz quadrada do número de CPUs enquanto que no hipercubo esse número cresce com o logaritmo do tamanho. Atualmente já são usados grids com dezenas de milhares CPUs. A Teragrid conecta milhares de computadores usando uma rede de 40 Gb/s.
