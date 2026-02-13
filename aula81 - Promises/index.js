function randomN(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'))

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Acessando BD', randomN(1, 2)).then(estadoAcesso => {
    console.log(estadoAcesso)
    return esperaAi('Buscando no BD', randomN(1, 2))
})
.then(estadoAcesso => {
    console.log(estadoAcesso)
    return esperaAi('Validando BD', randomN(1, 2))
})
.then(estadoAcesso => {
    console.log(estadoAcesso)
    return esperaAi('Sucesso', randomN(1, 2))
})
.then(sucesso => {
    console.log(sucesso)
})
.catch(erro => {
    console.log('ERRO:', erro)
})

console.log('EXIBE ANTES, POIS PROMISSES SAO ASSINCRONAS')