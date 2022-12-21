 /*
 
15 - Pedra, papel e tesoura

Escreva um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e retorne o resultado no seguinte formato:
---------------------------------------------
"Player 1 won" ou "A Ties" ou "Player 2 won". 
---------------------------------------------

*/

function rockPaperScissors(signPerson1, signPerson2){
  const winsTo = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper',
  };

  if (signPerson1 === signPerson2) return 'A Ties';

  if (winsTo[signPerson1] === signPerson2) {
    return 'Player 1 won';
  }

  return 'Player 2 won'
}

module.exports = rockPaperScissors;
