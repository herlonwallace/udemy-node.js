// fs: File-system
const fs = require("fs");

fs.writeFile("./textoParaTeste", "Nome: Wallace Herlon", (erro) => {

    if (erro) {
        console.log("Erro durante o salvamento...");
    }
})
