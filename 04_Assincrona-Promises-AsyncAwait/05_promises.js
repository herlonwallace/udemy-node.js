function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = true;
            if (!deuErro) {
                resolve() // Promessa cumprida!
            } else {
                reject() // Falha na Promessa :(
            }
        }, 4000);
    })
}

enviarEmail("Olá mundo", "wherlon@hotmail.com").then(() => {
    console.log("Promise conseguiu fazer o que prometeu!");
}).catch(() => {
    console.log("Deu erro!");
})