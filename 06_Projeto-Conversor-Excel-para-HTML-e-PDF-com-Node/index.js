// fs: File-system
const fs = require("fs");

fs.readFile("./textoParaTeste",{encoding: 'utf-8'}, (erro, dados) => {

    if(erro) {
        console.log("Ocorreu uma falha durante a leitura do arquivo!")
    } else {
        console.log(dados);
    }
})
