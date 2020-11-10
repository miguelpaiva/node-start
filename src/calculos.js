const Matematica = require("./classes/Matematica");

const matematica = new Matematica(7, 3);

const resultadoSoma = matematica.somar();
const resultadoSubtracao = matematica.subtrair();
const resultadoMultiplicacao = matematica.multiplicar();
const resultadoDivisao = matematica.dividir();
const resultadoFibonacci = matematica.calcularFibonacci(6);

const resultadoOrdenacao = matematica.ordenarArray(
  matematica.geraRandomArray(5)
);
const resultadoOrdenacaoInv = matematica.ordenarArrayInv(
  matematica.geraRandomArray(7)
);

const resultadoPalavra = matematica.ordenarPalavra("lucas");

const resultadoParImpar = matematica.retornarNumerosParesImapares(
  matematica.geraRandomArray(15)
);

// matematica.getUserGithub();

module.exports = {
  resultadoSoma,
  resultadoSubtracao,
  resultadoMultiplicacao,
  resultadoDivisao,
  resultadoFibonacci,
  resultadoOrdenacao,
  resultadoOrdenacaoInv,
  resultadoPalavra,
  resultadoParImpar,
};
