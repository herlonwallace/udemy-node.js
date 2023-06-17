//Classes
class Filme {
    constructor(titulo, ano, genero, diretor, atores, duracao) {

        //Atributos: São como variáveis, só que pertence a uma classe.
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];
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
var vingadores = new Filme("Vingador 2", "2014", "Ação", "Alguem", "2h");

console.log(vingadores.titulo);
console.log(vingadores.ano);

var batman = new Filme("Batman", "2009", "Ação", "Alguem", "2h30");

console.log(batman.titulo);
console.log(batman.genero);