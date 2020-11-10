const Matematica = require("./classes/Matematica");

const matematica = new Matematica(7, 3);

const resultadoSoma = matematica.somar();
const resultadoSubtracao = matematica.subtrair();
const resultadoMultiplicacao = matematica.multiplicar();
const resultadoDivisao = matematica.dividir();
const resultadoFibonacci = matematica.calcularFibonacci(6);

const resultadoOrdenacao = matematica.ordenarArray([4, 3, 2, 5, 1]);
const resultadoOrdenacaoInv = matematica.ordenarArrayInv([4, 3, 2, 5, 1]);

const resultadoPalavra = matematica.ordenarPalavra("lucas");
//const resultadoPalavra = matematica.ordenarPalavra([3, 5, 2, 1, 4]);

module.exports = {
  resultadoSoma,
  resultadoSubtracao,
  resultadoMultiplicacao,
  resultadoDivisao,
  resultadoFibonacci,
  resultadoOrdenacao,
  resultadoOrdenacaoInv,
  resultadoPalavra,
  //testestringarray,
};
