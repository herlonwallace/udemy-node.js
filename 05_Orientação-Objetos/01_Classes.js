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