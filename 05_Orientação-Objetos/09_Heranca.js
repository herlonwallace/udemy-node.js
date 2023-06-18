class Animal {
    constructor(nome, idade, preco) {
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ChecarEstoque() {
        return 10;
    }
}

class Cachorro extends Animal {
    Latir() {
        console.log("ROLF! ROLF!");
    }
    ChecarEstoque() {
        return 67;
    }
}

var dog = new Cachorro("Dogão", 5, 250);

console.log(dog.ChecarEstoque());
dog.Latir();