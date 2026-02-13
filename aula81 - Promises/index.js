function randomN(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Conexao com BD', randomN(1, 2)).then(estadoBD => {
    console.log(estadoBD)
    return esperaAi('')
})