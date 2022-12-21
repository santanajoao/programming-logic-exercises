/*

09 - Brincando de espionagem

Joana e Jonas estão brincando de espionagem e querem trocar mensagens codificadas.

Escreva um algoritmo que recebe uma string troque as vogais no seguinte padrão e a retorne:
a - 5
e - b
i - 9
o - p
u - 1

*/

function encodeMessage(string) {
  const map = { 'a': '5', 'e': 'b', 'i': '9', 'o': 'p', 'u': '1' };

  let encodedMessage = '';
  for (let index = 0; index < string.length; index += 1) {
    const caractere = string[index];
    const replacement = map[caractere]
    encodedMessage += replacement || caractere;
  }
  
  return encodedMessage;
}

module.exports = encodeMessage;
