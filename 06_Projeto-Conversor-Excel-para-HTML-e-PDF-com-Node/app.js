const Processor = require("./Processor");
var Reaader = require("./Reader");

var leitor = new Reaader();

async function main(){
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados);
}

main();
