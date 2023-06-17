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

    Ficha() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano de lançamento: ${this.ano}`);
        console.log(`Gênero: ${this.genero}`);
        this.Reproduzir();
    }
    
}

//Objetos
var vingadores = new Filme("Vingador 2", "2014", "Ação", "Alguem", "2h");
vingadores.Ficha();

var batman = new Filme("Batman", "2009", "Ação", "Alguem", "2h30");
batman.Ficha();