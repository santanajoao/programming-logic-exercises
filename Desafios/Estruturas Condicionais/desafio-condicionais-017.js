/*

17 - Jogo do par ou ímpar

Lúcio e Ana estão brincando de PAR ou ÍMPAR. 

O algoritmo irá receber os seguinte parâmetros:
* lucioFingers = número de dedos que Lúcio mostrou;
* anaFingers = número de dedos que Ana mostrou;
* even = identificador de quem gritou PAR sendo: 1 para Lucio e 0 para Ana.

Tendo a informação de quem gritou par e o número de dedos estendidos de cada pessoa.

Exemplo:
lucioFingers = 3,
anaFingers = 2,
even = 1

Então:
3 + 2 = 5 (Ímpar)
No caso acima, Ana venceu.

Em caso de vitória de Ana retorne a mensagem no seguinte formato:
------------
"Ana venceu"
------------

Caso o contrário retorne:
--------------
"Lúcio venceu"
--------------

*/


function oddOreEven(lucioFingers, anaFingers, even){
  const sum = lucioFingers + anaFingers;
  const isEven = sum % 2 === 0;
  
  let winner = '';
  if (isEven) {
    winner = (even === 1) ? 'Lúcio' : 'Ana';
  } else {
    winner = (even === 1) ? 'Ana' : 'Lúcio'
  }
  
  return `${winner} venceu`;
}

module.exports = oddOreEven;
