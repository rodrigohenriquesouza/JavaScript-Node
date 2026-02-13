function randomN(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')
            
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Conexão com BD', randomN(1, 2)).then(estadoBD => {
    console.log(estadoBD)
    return esperaAi('Buscando os dados da base', randomN(1, 2)).then(estadoBD => {
        console.log(estadoBD)
        return esperaAi(232323, randomN(1, 2)).then(estadoBD => {
            console.log(estadoBD)
        }).catch(erro => {
            console.log('ERRO:', erro)
        }).then(() => {
            console.log('EXIBE OS DADOS NA TELA')
        })
    })
})

console.log('EXIBE ANTES, POIS PROMISSES SAO ASSINCRONAS')