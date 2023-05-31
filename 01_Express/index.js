const express = require("express");  // Importando o express
const app = express(); // Iniciando o express

app.get("/", (req, res) => { // URL { http://localhost:3000 }
    res.send("<h1>Bem vindo ao guia Express!</h1>");
});

app.get("/blog", (req, res) => { // URL { http://localhost:3000/blog }
    res.send("Bem vindo ao meu blog!");
});

app.get("/canal/youtube", (req, res) => { // URL { http://localhost:3000/canal/youtube?canal=Dinheiro }
    var canal = req.query["canal"];
    res.send(canal);
});

app.get("/contato/:nome", (req, res) => { // URL { http://localhost:3000/contato/Wallace }
    let nome = req.params.nome;
    res.send("<h1>Olá " + nome + " </h1>");
});

app.listen(3000, (e) => {
    if (e) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciando com sucesso!");
    }
})


