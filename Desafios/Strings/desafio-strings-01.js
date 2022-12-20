/*

01 - Inverte nomes

Escreva um algoritmo que recebe uma string com o formato "Nome Sobrenome" e retorne
uma outra string com os nomes invertidos.

Por exemplo:
---------------------
Entrada:
"Xablau Xablauzinho"

Saída:
"Xablauzinho Xablau"
---------------------

*/

function reverseNames(fullName) {
  const namesArray = fullName.split(' ');
  const reversedNamesArray = namesArray.reverse()
  return reversedNamesArray.join(' ');
}

module.exports = reverseNames;
