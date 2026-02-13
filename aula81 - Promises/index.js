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

esperaAi('Conexão com BD', randomN(1, 2)).then(estadoBD => {
    console.log(estadoBD)
    return esperaAi('Buscando os dados da base', randomN(1, 2)).then(estadoBD => {
        console.log(estadoBD)
        return esperaAi('Tratando os dados da base', randomN(1, 2)).then(estadoBD => {
            console.log(estadoBD)
        }).then(() => {
            console.log('EXIBE OS DADOS NA TELA')
        })
    })
})


// buscando os dados da base
// tratando os dados da base
// exibe dados na tela