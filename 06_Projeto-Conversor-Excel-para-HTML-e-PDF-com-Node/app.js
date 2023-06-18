const Processor = require("./Processor");
var Reaader = require("./Reader");
var Table = require("./Table");
var HTMLParser = require("./HtmlParser");
var Writer = require("./Writer");

var leitor = new Reaader();
var escritor = new Writer();

async function main() {
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HTMLParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html)

}

main();
