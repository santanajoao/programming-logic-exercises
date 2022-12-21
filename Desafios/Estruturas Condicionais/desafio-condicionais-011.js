 /*
 
 11 - Triplica vogais

 Escreva um algoritmo que recebe uma string (frase ou palavra) e retorne uma outra string com as vogais "triplicadas".
 
 Por exemplo:
 ------------
 Entrada:
 "Camelo"

 Saída:
 "Caaameeelooo"
 --------------
 
 */

function triVowels(word){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let newWord = '';
  for (let index = 0; index < word.length; index += 1) {
    const letter = word[index];
    if (vowels.includes(letter.toLowerCase())) {
      newWord += letter.repeat(3);
    } else {
      newWord += letter;
    }
  }
  return newWord;
}

module.exports = triVowels;
