class Cachorro {
  constructor(nome, raca) {
    this.raca = raca;
    this.nome = nome;
  }
  latir() {
    console.log("AU AU");
  }
  falaNome() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

module.exports = Cachorro;
