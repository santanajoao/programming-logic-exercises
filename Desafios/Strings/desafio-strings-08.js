/*

08 - Descubra quantas letras tem

Escreva um algoritmo que recebe 2 parâmetros: uma string (frase ou palavra) e uma letra.

A função deve retornar quantas letras passadas como 2º parâmetro existem na string.

Obs: Trate as vogais com acento como não tendo, por exemplo:
a = á, ã, à.

*/

const replaceAcentos = (string) => (
  string
    .replace(/[àáäâã]/gi, 'a')
    .replace(/[èéëê]/gi, 'e')
    .replace(/[ìíïî]/gi, 'i')
    .replace(/[òóöô]/gi, 'o')
    .replace(/[ùúüû]/gi, 'u')
);

function countLetters(string, letter) {
  const lowerString = string.toLowerCase();
  const newString = replaceAcentos(lowerString);
  const lowerLetter = letter.toLowerCase();

  let counter = 0;
  for (let index = 0; index < newString.length; index += 1) {
    if (newString[index] === lowerLetter) {
      counter += 1;
    }
  }

  return counter;
}

module.exports = countLetters;
