# Engenharia da Computação - Sistemas Distribuídos
> Otavio Cesar da Costa dos Santos - UFMA

- Atividade S01E02 - Síntese Classificação de Hardware com várias CPUs

---
## Classificação de Hardware com várias CPUs
---

### Definição

- Os sistemas distribuídos são constituidos de várias CPUs interconectadas, porém há várias formas que o hardware pode ser organizado. Há algumas classificões existentes, há uma muito utilizada pois leva em considerando o número de fluxo de instruções e o número de fluxo de dados, a seguir é mostrada esta classificação.

### Características e Conceitos

- **SISD − Single Instruction Single Data**
    - Fluxo de instruções e dados único é a característica dos uniprocessadores tradicionais; 
- **MIMD − Multiple Instructions Multiple Dados**
    - Caracteriza−se por vários processadores intercnectados. Tanembau [1995] apresenta uma classificação, onde os dois primeiros são definidos em relação a organização da memória e os últimos em relação a forma de interconexão:
        - Multiprocessador − maquinas MIND com memória compartilhada (um único espaço de endereçamento virtual compartilhado por todas as CPUs);
        - Multicomputador − maquinas que não possuem memória compartilhada, isto é, cada processador possui sua memória privada.
        - Barramento − um único cabo, rede, barramento ou outro meio que conecte todas as máquinas.
        - Switch − existem cabos individuais conectando maquina a maquina, com vários padrões possíveis.
    - Há um a outra forma muito usada de classificação que é:  
        - Fortemente acoplado (Tighly coupled): comunicação rápida entre processadores (grande número de bitis por segundo.
        - Fracamente Acoplado ( loosely Coupled): atraso na troca de mensagens entre as máquinas é muito alto.
        
![](https://github.com/otaviocesar/sistemas-distribuidos-2020-3/blob/master/imagens/mimd.png?raw=true)
