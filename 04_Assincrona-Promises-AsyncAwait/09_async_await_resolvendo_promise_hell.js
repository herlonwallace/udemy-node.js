function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1500)
    })
}

function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("wherlon@hotmail.com");
        }, 2000)
    })
}

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false;
            if (!deuErro) {
                resolve({ time: 6, to: "wherlon@hotmail.com" }) // Promessa cumprida!
            } else {
                reject("Falha no Reject") // Falha na Promessa :(
            }
        }, 4000);
    })
}


async function principal() {
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id);
    enviarEmail("Olá, Como vai?", email).then(() => {
        console.log("Email enviado!");
    }).catch((e) => {
        console.log(e);
    })
}

principal();