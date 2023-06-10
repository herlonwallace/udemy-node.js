function enviarEmail(corpo, para) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------------
            ${corpo}
            ----------------------------------
            De: Wallace Herlon
        `)
    },8000)
}

console.log("Início do envio de e-mail!");
enviarEmail("Oi, seja bem vindo ao Guia", "wherlon@hotmail.com");
console.log("Seu e-mail foi eviado, deve chegar em minutos");
console.log("TUDO OK!");