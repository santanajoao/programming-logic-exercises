/*

09 - Aprovação nos projetos

Aqui na Trybe você precisa entregar os projetos dentro de algumas regras para obter aprovação.

Escreva um algoritmo que recebe um objeto com a seguinte estrutura:
{
rec: bool,
reqs: number int,
totalReqs: number int,
completed: number int,
}

Onde:
* rec: informando se a pessoa estudante está ou não em recuperação;
* reqs: são os requisitos obrigatórios;
* totalReqs: são os requisitos obrigatórios mais os bônus:
* completed: quantidade de requisitos feitos, completados:

Considere as seguintes premissas:
* Se a pessoa não estiver em período de recuperação, é preciso entregar 80% ou mais dos requisitos obrigatórios para obter aprovação;
* Se a pessoa estiver em período de recuperação, é preciso entregar 90% dos requisitos totais (obrigatórios + bônus) para obter aprovação;

Caso a pessoa tenha conseguido entregar o projeto retorne:
----------------------------------
"Parabéns, você está aprovado(a)!"
----------------------------------

Caso a pessoa não tenha conseguido entregar o projeto retorne:
-----------------------------------------------
"Você ainda precisa entregar mais requisitos;)"
-----------------------------------------------

*/

function evaluateProject({ rec, reqs, totalReqs, completed }){
  const percentedNedeed = (rec ? 0.9 : 0.8);
  const consideredRequirements = (rec ? totalReqs : reqs);
  const percentageCompleted = completed / consideredRequirements;
  const aproved = (percentageCompleted >= percentedNedeed);
  
  if (aproved) {
    return 'Parabéns, você está aprovado(a)!';
  }
  return 'Você ainda precisa entregar mais requisitos ;)';
}

module.exports = evaluateProject;
