var Reaader = require("./Reader");

var leitor = new Reaader();

async function main(){
    var dados = await leitor.Read("./users.csv");
    console.log(dados);
}

main();
