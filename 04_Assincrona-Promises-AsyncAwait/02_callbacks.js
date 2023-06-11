function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------------
            ${corpo}
            ----------------------------------
            De: Wallace Herlon
        `);
        callback();
    }, 8000);
}

console.log("Início do envio de e-mail!");
enviarEmail("Oi, seja bem vindo ao Guia", "wherlon@hotmail.com", () => {
    console.log("ISSO É UM CALLBACK!");
    console.log("Acaba de ser executado!");
    console.log("Seu e-mail foi eviado, deve chegar em minutos");
    console.log("TUDO OK!");
});
