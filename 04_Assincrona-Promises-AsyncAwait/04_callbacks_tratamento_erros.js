function enviarEmail(corpo, para, callback) {
    setTimeout(() => {

        // ......... Lógica

        var deuErro = false;

        if (deuErro) {
            callback("Falha ao envio de e-mail!")
        } else {
            callback();
        }
    }, 8000);
}

console.log("Início do envio de e-mail!");
enviarEmail("Oi, seja bem vindo ao Guia", "wherlon@hotmail.com", (erro) => {
    if (erro == undefined) { // Ok
        console.log("TUDO OK!");
    } else { // Ocorreu um erro!
        console.log("Ocorreu um erro: " + erro);
    }

});
