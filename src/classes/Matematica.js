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
      let elemento = listaNumeros[posicao];
      for (let index = posicao + 1; index < tamanhoArray; index++) {
        let elementoComparacao = listaNumeros[index];
        if (elementoComparacao < elemento) {
          listaNumeros[posicao] = elementoComparacao;
          listaNumeros[index] = elemento;
          elemento = elementoComparacao;
        }
      }
    }
    return listaNumeros;
  }

  ordenarArrayInv(listaNumeros) {
    const tamanhoArray = listaNumeros.length;

    for (let posicao = 0; posicao < tamanhoArray - 1; posicao++) {
      let letraAtual = listaNumeros[posicao];
      for (let index = posicao + 1; index < tamanhoArray; index++) {
        if (listaNumeros[posicao] < listaNumeros[index]) {
          listaNumeros[posicao] = listaNumeros[index];
          listaNumeros[index] = letraAtual;
        }
      }
    }
    return listaNumeros;
  }

  // [l,u,c,a,s] ---- [3,5,2,1,4]
  ordenarPalavra(palavra) {
    const tamanhoPalavra = palavra.length;
    let palavraArray = this.converteStringParaVetor(palavra);

    for (let posicao = 0; posicao < tamanhoPalavra - 1; posicao++) {
      let letraAtual = palavraArray[posicao];
      for (let index = posicao + 1; index < tamanhoPalavra; index++) {
        if (palavraArray[posicao] > palavraArray[index]) {
          palavraArray[posicao] = palavraArray[index];
          palavraArray[index] = letraAtual;
          letraAtual = palavraArray[posicao];
        }
      }
    }
    palavraArray.join("");
    return palavraArray;
  }

  converteStringParaVetor(string) {
    const array = [];
    for (let posicao = 0; posicao < string.length; posicao++) {
      const letra = string[posicao];
      array.push(letra);
    }
    return array;
  }
}

module.exports = Matematica;
