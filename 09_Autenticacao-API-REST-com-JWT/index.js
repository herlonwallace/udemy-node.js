const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// Em um válidação real essa chave não pode ser mostrada a ninguém 
const JWTSecret = "bnmlkjhyuiosdfgcvbytrsghjvbnmuy"


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function auth(req, res, next) {
    const authToken = req.headers['authorization'];

    if (authToken != undefined) {

        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token, JWTSecret, (err, data) => {
            if (err) {
                res.status(401);
                res.json({ err: "Token inválido!" })
            } else {
                req.token = token;
                req.loggedUSer = { id: data.id, email: data.email }
                console.log(data);
                next();
            }
        })
    } else {
        res.status(401);
        res.json({ err: "Token inválido!" })
    }
    console.log(authToken);
}

var DB = {
    games: [
        {
            id: 23,
            title: "Call of duty Mw",
            hear: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of thieves",
            hear: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            hear: 2013,
            price: 36
        },
    ],
    users: [
        {
            id: 1,
            name: "Wallace Herlon",
            email: "wherlon@hotmail.com",
            password: "123456"
        },
        {
            id: 2,
            name: "Paulo",
            email: "paulo@hotmail.com",
            password: "9988"
        }
    ]
}

app.get("/games", auth, (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);
        if (game != undefined) {
            res.statusCode == 200;
            res.json(game);
        } else {
            res.sendStatus(404);
        }
    }
});

app.post("/game", auth, (req, res) => {
    var { title, price, year } = req.body;
    DB.games.push({
        id: 234,
        title,
        price,
        year
    });
    res.sendStatus(200);
});

app.delete("/game/:id", auth, (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400); // (400 Requisição inválida) O pedido não pôde ser entregue devido à sintaxe incorreta.
    } else {
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);

        if (index == -1) {
            res.sendStatus(404);
        } else {
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id", auth, (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400); // (400 Requisição inválida) O pedido não pôde ser entregue devido à sintaxe incorreta.
    } else {
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);
        if (game != undefined) {

            var { title, price, year } = req.body;

            if (title != undefined) {
                game.title = title
            }

            if (price != undefined) {
                game.price = price
            }

            if (year != undefined) {
                game.year = year
            }

            res.sendStatus(200);

        } else {
            res.sendStatus(404);
        }
    }
});

app.post("/auth", (req, res) => {
    var { email, password } = req.body;

    if (email != undefined) {

        var user = DB.users.find(u => u.email == email);

        if (user != undefined) {
            if (user.password == password) {
                jwt.sign({ id: user.id, email: user.email }, JWTSecret, { expiresIn: '48h' }, (err, token) => {
                    if (err) {
                        res.status(400);
                        res.json({ err: "Falha interna " });
                    } else {
                        res.status(200);
                        res.json({ token: token });
                    }
                });
            } else {
                res.status(404);
                res.json({ err: "Credenciais inválidas!" })
            }
        } else {
            res.status(404);
            res.json({ err: "O e-mail enviado não existe na base de dados!" })
        }

    } else {
        res.status(400);
        res.json({ err: "E-mail inválido." })
    }
})

app.listen(7070, () => {
    console.log("API RODANDO!");
})