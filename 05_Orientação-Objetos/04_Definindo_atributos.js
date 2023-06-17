//Classes
class Filme {
    constructor() {

        //Atributos: São como variáveis, só que pertence a uma classe.
        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;
    }

    //Métodos: São funções dentro da classe.
    Reproduzir() {
        console.log("Reproduzindo...");
    }

    Pausar() {
        console.log("Pausado  ||");
    }

    Avançar() {
        console.log("Avançar >>");
    }

    Fechar() {
        console.log("Fechar  X");
    }
}

//Objetos
var vingadores = new Filme();
//Definindo valores no Atributos
vingadores.titulo = "Vingador 2";
vingadores.ano = "2014";
vingadores.genero = "Ação";

console.log(vingadores.titulo);
console.log(vingadores.ano);

var batman = new Filme();

batman.titulo = "Batman";
batman.ano = "2009";
batman.genero = "Ação";

console.log(batman.titulo);
console.log(batman.genero);