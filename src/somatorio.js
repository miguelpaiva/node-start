const Cachorro = require("./classes/Cachorro");

function PegaLadrao(animal) {
  animal.latir();
}

function falaSeuNome(animal) {
  animal.falaNome();
}

function descereveCachorro({ nome, raca }) {
  console.log(`O cachorro ${nome} é da raça ${raca}`);
}

const dog = new Cachorro("Spike", "Pitbull");

const dog2 = {
  nome: "bichano",
  raca: "siames",
  idade: "3",
  cor: "branco",
  latir: () => {
    console.log("Miaauuu");
  },
};

PegaLadrao(dog2);
