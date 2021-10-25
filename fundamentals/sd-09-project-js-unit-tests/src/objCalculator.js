/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

// Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

const calculator = {};

const add = (numb1, numb2) => numb1 + numb2;
const mult = (numb1, numb2) => numb1 * numb2;
const div = (numb1, numb2) => Math.trunc(numb1 / numb2);
const sub = (numb1, numb2) => numb1 - numb2;

calculator.add = add;
calculator.mult = mult;
calculator.div = div;
calculator.sub = sub;

module.exports = calculator;
