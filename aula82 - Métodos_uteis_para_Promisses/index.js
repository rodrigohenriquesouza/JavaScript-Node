function randomNumber(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            return reject(new Error('Erro'))
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promisse')
        }, tempo)
    })
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = ['XXXXX',
    esperaAi('Promise 1', randomNumber(1, 3)),
    esperaAi('Promise 2', randomNumber(1, 3)),
    esperaAi('Promise 3', randomNumber(1, 3)),
    'XXXXX'
]

Promise.all(promises)
.then(valor => {
    console.log(valor)
})
.catch(erro => {
    console.log(erro)
})