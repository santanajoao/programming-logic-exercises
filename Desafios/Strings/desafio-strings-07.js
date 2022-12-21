/*

07 - Contem "a" ?

Escreva um algoritmo que recebe uma palavra e checa se ela possui a letra "a" considerando as seguintes premissas para cada tipo de retorno.

Se apenas começa com letra "a", retorne:
------------------------------------------------------------
"A palavra x possui a letra 'a' apenas como primeira letra."
------------------------------------------------------------

Se apenas termina com a letra "a", retorne:
----------------------------------------------------------
"A palavra x possui a letra "a" apenas como última letra."
----------------------------------------------------------

Se apenas termina e começa com a letra "a", retorne:
----------------------------------------------------------------------
"A palavra x possui a letra 'a' apenas no começo e no fim da palavra."
----------------------------------------------------------------------

Se apenas possui o "a" sem a mesma ser a primeira ou a última letra da palavra, , retorne:
----------------------------------------------------------------------------
"A palavra x possui a letra 'a', porém não é a primeira nem a última letra."
----------------------------------------------------------------------------

Senão, retorne:
-----------------------------
"A palavra x não contém "a"."
-----------------------------

*/

function includeA(word) {
  const lowerCaseWord = word.toLowerCase();
  const wordMiddle = lowerCaseWord.slice(1, word.length - 1);
  const startsWithA = lowerCaseWord[0] === 'a';
  const endsWithA = lowerCaseWord.endsWith('a');
  const hasAInMiddle = wordMiddle.includes('a');

  if (startsWithA && endsWithA && hasAInMiddle) {
    return `A palavra ${word} possui a letra 'a' no começo, no meio e no fim.`;
  }

  if (startsWithA && endsWithA && !hasAInMiddle) {
    return (
      `A palavra ${word} possui a letra 'a' ` +
      `apenas no começo e no fim da palavra.`
    );
  }

  if (startsWithA && !(endsWithA || hasAInMiddle)) {
    return `A palavra ${word} possui a letra 'a' apenas como primeira letra.`;
  }

  if (endsWithA && !(startsWithA || hasAInMiddle)) {
    return `A palavra ${word} possui a letra 'a' apenas como última letra.`
  }

  if (hasAInMiddle && !(startsWithA || endsWithA)) {
    return (
      `A palavra ${word} possui a letra 'a', ` +
      `porém não é a primeira nem a última letra.`
    );
  }

  return `A palavra ${word} não contém a letra 'a'.`;
}

module.exports = includeA;
