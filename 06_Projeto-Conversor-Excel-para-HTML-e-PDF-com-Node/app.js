const Processor = require("./Processor");
var Reaader = require("./Reader");
var Table = require("./Table");

var leitor = new Reaader();

async function main(){
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);
    console.log(usuarios.rows);
}

main();
