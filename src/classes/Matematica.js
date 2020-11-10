const axios = require("axios").default;
class Matematica {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  somar() {
    const resultadoSoma = this.num1 + this.num2;
    return resultadoSoma;
  }

  subtrair() {
    const resultadoSubtracao = this.num1 - this.num2;
    return resultadoSubtracao;
  }

  multiplicar() {
    const resultadoMultiplicacao = this.num1 * this.num2;
    return resultadoMultiplicacao;
  }

  dividir() {
    const resultadoDivisao = this.num1 / this.num2;
    return resultadoDivisao.toFixed(1);
  }

  // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584
  calcularFibonacci(fibonacci) {
    let anterior = 0;
    let atual = 1;
    let fibFinal;

    if (fibonacci <= 1) return fibonacci;

    for (let x = 1; x < fibonacci; x++) {
      fibFinal = atual + anterior;
      anterior = atual;
      atual = fibFinal;
    }

    return fibFinal;
  }

  ordenarArray(listaNumeros) {
    let tamanhoArray = listaNumeros.length;

    for (let posicao = 0; posicao < tamanhoArray - 1; posicao++) {
      let elementoAtual = listaNumeros[posicao];
      for (let index = posicao + 1; index < tamanhoArray; index++) {
        let elementoComparacao = listaNumeros[index];
        if (elementoComparacao < elementoAtual) {
          listaNumeros[posicao] = elementoComparacao;
          listaNumeros[index] = elementoAtual;
          elementoAtual = elementoComparacao;
        }
      }
    }
    return listaNumeros;
  }

  ordenarArrayInv(listaNumeros) {
    const tamanhoArray = listaNumeros.length;

    for (let posicao = 0; posicao < tamanhoArray - 1; posicao++) {
      let elementoAtual = listaNumeros[posicao];
      for (let index = posicao + 1; index < tamanhoArray; index++) {
        let elementoComparacao = listaNumeros[index];
        if (elementoAtual < elementoComparacao) {
          listaNumeros[posicao] = elementoComparacao;
          listaNumeros[index] = elementoAtual;
        }
      }
    }
    return listaNumeros;
  }

  // [l,u,c,a,s] ---- [3,5,2,1,4]
  ordenarPalavra(palavra) {
    const tamanhoPalavra = palavra.length;
    let palavraArray = this.converterStringParaVetor(palavra);

    for (let posicao = 0; posicao < tamanhoPalavra - 1; posicao++) {
      let letraAtual = palavraArray[posicao];
      for (let index = posicao + 1; index < tamanhoPalavra; index++) {
        let letraComparacao = palavraArray[index];
        if (letraAtual > letraComparacao) {
          palavraArray[posicao] = letraComparacao;
          palavraArray[index] = letraAtual;
          letraAtual = letraComparacao;
        }
      }
    }
    palavraArray.join("");
    return palavraArray;
  }

  converterStringParaVetor(string) {
    const array = [];
    for (let posicao = 0; posicao < string.length; posicao++) {
      const letra = string[posicao];
      array.push(letra);
    }
    return array;
  }

  geraRandomNum() {
    let numRandom = parseInt(Math.random() * 100);
    return numRandom;
  }

  geraRandomArray(quantidadeNum) {
    let randomArray = [];
    for (let cont = 0; cont < quantidadeNum; cont++) {
      randomArray.push(this.geraRandomNum());
    }
    return randomArray;
  }

  retornarNumerosParesImapares(listaNumeros) {
    const tamanhoArray = listaNumeros.length;
    let arrayPares = [],
      arrayImpares = [];

    for (let index = 0; index < tamanhoArray; index++) {
      let elementoVerificacao = listaNumeros[index];
      if (elementoVerificacao % 2 == 0) {
        arrayPares.push(elementoVerificacao);
      } else {
        arrayImpares.push(elementoVerificacao);
      }
    }
    return {
      arrayPares,
      arrayImpares,
    };
  }

  getUserGithub() {
    axios
      .get("https://api.github.com/users/miguelpaiva")
      .then((response) => {
        console.log(response.data.login);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = Matematica;
