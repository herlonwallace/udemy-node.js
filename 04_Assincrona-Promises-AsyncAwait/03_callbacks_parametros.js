function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------------
            ${corpo}
            ----------------------------------
            De: Wallace Herlon
        `);
        callback("OK", 5, "8s");
    }, 8000);
}

console.log("Início do envio de e-mail!");
enviarEmail("Oi, seja bem vindo ao Guia", "wherlon@hotmail.com", (status, amount, time) => {
    console.log(`
        Status: ${status}
        ---------------------
        Contatos: ${amount}
        ---------------------
        Tempo de envio ${time}
    `);
    console.log("TUDO OK!");
});
