/*

05 - Primeira e última letra

Escreva um algoritmo que recebe uma palavra e retorne uma mensagem com a primeira e ultima letra.

Por exemplo:
---------------------------------------------
Entrada:
"Sandy"

Saída:
"A primeira letra é: S, a última letra é: y."
---------------------------------------------

*/

function firstLastLetter(word) {
  const firstLetter = word[0];
  const lastIndex = word.length - 1;
  const lastLetter = word[lastIndex];
  return (
    `A primeira letra é: ${firstLetter} e a última letra é: ${lastLetter}.`
  );
}

module.exports = firstLastLetter;
