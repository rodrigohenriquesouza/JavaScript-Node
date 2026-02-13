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

esperaAi('ESPERA FRASE 1', randomN(1, 2)).then(frase => {
    console.log(frase)
    return esperaAi('ESPERA FRASE 2', randomN(1, 2)).then(frase => {
        console.log(frase)
        return esperaAi('ESPERA FRASE 3', randomN(1, 2)).then(frase => {
            console.log(frase)
        }).then(() => {
            console.log('EXIBI POR ULTIMO')
        })
    }) 
})

