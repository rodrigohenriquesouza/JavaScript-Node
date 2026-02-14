function randomNumber(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            return reject(new Error(`Aceita somente strings`))
        }

        setTimeout(() => {
            resolve(msg.toUpperCase())
        }, tempo)
    })
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    esperaAi('Promise 1', randomNumber(1, 3)),
    esperaAi('Promise 2', randomNumber(1, 3)),
    esperaAi('Promise 3', randomNumber(1, 3)),
]

/* Promise.all(promises)
.then(valor => {
    console.log(valor)
})
.catch(erro => {
    console.log(erro)
}) */

/* Promise.race(promises)
.then(resolvido => {
    console.log(resolvido)
}) */

function baixaPagina() {
    const emCache = false

    if(emCache) {
        return Promise.resolve('Esta na página')
    } else {
        return Promise.reject('Página carregando', 2000)
    }
}

baixaPagina()
.then(pagina => {
 console.log(pagina)
})
 .catch(erro => {
console.log('É um erro:', erro)
})

