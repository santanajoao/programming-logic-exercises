/*

10 - Telefone desconfigurado

Um banco de dados possui uma série de números de telefone, mas cada um com um padrão diferente.
Alguns têm espaço, outros não, alguns sem traço, outros não, alguns com parênteses, outros não,
e toda sorte de combinações possíveis e imagináveis.

Crie uma função que receba um número de telefone desconfigurado
e retorne o número de telefone formatado, com suporte ao dígito 9
de prefixo nos celulares, mas funcionando normalmente sem esse prefixo.

O que será avaliado?
- Ao enviar como parâmetro 11 97878-7878 a função deve retornar (11) 9 7878-7878;
- Se o parâmetro for (11)78787878 a função deve retornar (11) 7878-7878;
- Se o parâmetro for 1178787878 a função deve retornar (11) 7878-7878;
- E se não for um número de telefone válido a função deve retornar o parâmetro; logo:
- Se o parâmetro for 234 a função deve retornar 237;

*/

const getTelephoneParts = (string, length) => {
  const DDD = string.slice(0, 2);
  const aditionalNumber = (length === 11) ? string[2] : '';

  const firstStartIndex = (length === 11) ? 3 : 2;
  const firstEndIndex = (length === 11) ? 7 : 6;

  const firstNumbers = string.slice(firstStartIndex, firstEndIndex);
  const lastNumbers = string.slice(firstEndIndex);

  return { DDD, aditionalNumber, firstNumbers, lastNumbers };
}

function telephoneFormat(string) {
  const newString = String(string).replace(/[ ()-]/g, '');
  const { length } = newString;

  if (length < 10 || length > 11) return string;

  const {
    DDD, aditionalNumber, firstNumbers, lastNumbers,
  } = getTelephoneParts(newString, length);

  if (aditionalNumber) {
    return `(${DDD}) ${aditionalNumber} ${firstNumbers}-${lastNumbers}`;
  }
  return `(${DDD}) ${firstNumbers}-${lastNumbers}`;
}

module.exports = telephoneFormat;
