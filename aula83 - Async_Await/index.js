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

