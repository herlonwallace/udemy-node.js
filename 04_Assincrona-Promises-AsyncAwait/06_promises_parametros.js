function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = true;
            if (!deuErro) {
                resolve({ time: 6, to: "wherlon@hotmail.com"}) // Promessa cumprida!
            } else {
                reject("Falha no Reject") // Falha na Promessa :(
            }
        }, 4000);
    })
}

enviarEmail("Olá mundo", "wherlon@hotmail.com").then((dados) => {
    console.log(`
        Time: ${dados.time}
        -------------------
        To: ${dados.to}
    `);
}).catch((erro) => {
    console.log("Deu erro! " + erro);
})