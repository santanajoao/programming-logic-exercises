/*

18 - Jogo de cartas

Mara e Sara estão jogando um novo jogo de cartas chamado Xablau.
O jogo utiliza um baralho normal que possui Ás, Dama, Valete e Reis.

Para jogar Xablau é necessário ter duas pessoas participantes, que devem receber 2 cartas cada.

Ganha o jogo quem tiver a maior pontuação, e caso a pontuação das pessoas seja igual o jogo empata.

A pontuação do Xablau é feita da seguinte forma:
* Se as cartas forem iguais, a pessoa jogadora recebe a soma das duas cartas multiplicada por 2;
*  Se as cartas forem sequencias, por exemplo 1 e 2 ou 10 e 11, a pessoa jogadora recebe a soma das duas cartas multiplicada por 3;
* Caso não satisfaça nenhum das duas condições anteriores, a pessoa jogadora recebe somente a soma das duas cartas.

Para a pontuação vamos considerar apenas números inteiros de 1 a 13.

Escreva um algoritmo que retorne quando houver empate no jogo ou quem foi a pessoa vencedora do Xablau e qual foi sua pontuação baseando-se nas informações dadas anteriormente.

Possíveis retornos:
--------------------------
"Mara venceu com x pontos"
--------------------------
"Sara venceu com x pontos"
--------------------------
"O jogo empatou"
----------------

Os seus retornos devem seguir o mesmo padrão dos exemplos acima.

*/

const getScore = (card1, card2) => {
  const cardsSum = card1 + card2;
  if (card1 === card2) {
    return cardsSum * 2;
  } else if (Math.abs(card1 - card2) === 1) {
    return cardsSum * 3;
  } else {
    return cardsSum;
  }
}

function cardsGame(maraCard1, maraCard2, saraCard1, saraCard2){
  let maraScore = getScore(maraCard1, maraCard2);
  let saraScore = getScore(saraCard1, saraCard2);

  if (maraScore === saraScore) return 'O jogo empatou';
  
  if (maraScore > saraScore) return `Mara venceu com ${maraScore} pontos`; 

  return `Sara venceu com ${saraScore} pontos`; 
}

module.exports = cardsGame;
