class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    iniciar() { }

    parar() { }
}

class CarroEletrico extends Carro {
    constructor(marca, modelo, alcance) {
        super(marca, modelo);
        this.alcance = alcance;
    }

    iniciar() {
        console.log(`Iniciando o ${this.marca} ${this.modelo}`);
    }

    parar() {
        console.log(`Parando o ${this.marca} ${this.modelo}`);
    }

    carregar() {
        console.log(`Carregando o ${this.marca} ${this.modelo}`);
    }
}

class CarroGasolina extends Carro {
    constructor(marca, modelo, combustivel) {
        super(marca, modelo);
        this.combustivel = combustivel;
    }

    iniciar() {
        console.log(`Iniciando o ${this.marca} ${this.modelo}`);
    }

    parar() {
        console.log(`Parando o ${this.marca} ${this.modelo}`);
    }

    abastecer() {
        console.log(`Abastecendo o ${this.marca} ${this.modelo}`);
    }
}

const meuCarroEletrico = new CarroEletrico("Tesla", "Model S", 373);
const meuCarroGasolina = new CarroGasolina("Ford", "Mustang", 15);
const outroCarroEletrico = new CarroEletrico("Nissan", "Leaf", 150);

meuCarroEletrico.iniciar();
meuCarroEletrico.parar();
meuCarroEletrico.carregar();

meuCarroGasolina.iniciar();
meuCarroGasolina.parar();
meuCarroGasolina.abastecer();

outroCarroEletrico.iniciar();
outroCarroEletrico.parar();
outroCarroEletrico.carregar(); 