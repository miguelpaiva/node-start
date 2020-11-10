const {
  resultadoSoma,
  resultadoSubtracao,
  resultadoMultiplicacao,
  resultadoDivisao,
  resultadoFibonacci,
  resultadoOrdenacao,
  resultadoOrdenacaoInv,
  resultadoPalavra,
  resultadoParImpar,
} = require("./calculos");

const { arrayPares, arrayImpares } = resultadoParImpar;

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração: ${resultadoSubtracao}`);
console.log(`Multiplicação: ${resultadoMultiplicacao}`);
console.log(`Divisão: ${resultadoDivisao}`);
console.log(`Fibonacci: ${resultadoFibonacci}`);
console.log(`Ordenação: ${resultadoOrdenacao}`);
console.log(`Ordenação Invertida: ${resultadoOrdenacaoInv}`);
console.log(`Ordena Palavra: ${resultadoPalavra}`);
console.log(`Array Par: ${arrayPares}`);
console.log(`Array Impar: ${arrayImpares}`);

// REST
const user = {
  nome: "Miguel",
  idade: "23",
  empresa: "SPS",
};
const { nome, ...resto } = user;

console.log(nome);
console.log(resto);

function soma(a, b, ...params) {
  return params;
}
const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// SPREAD
const user2 = { ...user, nome: "Lucas", peso: 70 };
console.log(user2);
