function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { name: "Wallace", lang: "JS" },
                { name: "Pedro", lang: "C#" },
                { name: "Vitoria", lang: "Java" }
            ])
        }, 4000)
    })
}

async function principal() {
    var usuarios = await pegarUsuarios();
    console.log(usuarios);
    console.log("Aguardará processar o usuário para printar essa mensagem");
}

principal()