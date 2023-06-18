// fs: File-system
const fs = require("fs");

fs.readFile("./usuario.json", { encoding: 'utf-8' }, (erro, dados) => { // abriu o arquivo, lendo o conteúdo.

    if (erro) {
        console.log("Um erro aconteceu!");
    } else {

        var conteudo = JSON.parse(dados); //converte texto para objeto javascript(JSON).

        // alterando as informações que estava dentro do arquivo texto.
        conteudo.nome = "Wallace Herlon Silva";
        conteudo.curso = "Formação React";
        conteudo.categoria = "React";

        fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro) => { // converte objeto javascript(JSON) para texto.
            if (erro) {
                console.log("Um erro aconteceu durante a escrita!");
            }
        });
    }
});
