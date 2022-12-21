/*

07 - Maior ou menor de idade

Escreva um algoritmo que verifica se a pessoa é maior ou menor de idade.

Caso a pessoa for maior idade retorna:
-----------------------------
"A pessoa é maior de idade.".
-----------------------------

Caso contrário: 
-----------------------------
"A pessoa é menor de idade."
-----------------------------

Bônus: Crie a condição utilizando O Operador Ternário. 

*/

function legalAge(age){
  const result = (age >= 18 ? 'maior' : 'menor');
  return `A pessoa é ${result} de idade.`;
}

module.exports = legalAge;
