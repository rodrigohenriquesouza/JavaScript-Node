function rand(min = 0, max = 3) {
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
            resolve(msg.toUpperCase() + ' Passei na promise')
        }, tempo)
    })
}

/* esperaAi('Fase 1', randomNumber())
.then(fase => {
    console.log(fase)
    return esperaAi('Fase 2', randomNumber())
})
.then(fase => {
    console.log(fase)
    return esperaAi('Fase 3', randomNumber())
})
.then(fase => {
    console.log(fase)
    return fase
})
.then(fase => {
    console.log(`Terminamos na fase:${fase}`)
})
.catch(e => console.log(e)) */

async function executaPromise() {
    try {
    const fase1 =  esperaAi('Fase 1', rand())
    console.log(fase1)
    const fase2 = await esperaAi('Fase 2', rand())
    console.log(fase2)
    const fase3 = await esperaAi('Fase 3', rand())
    console.log(fase3)
    
    console.log('Terminamos na fase:', fase3)
    
    } catch(erro) {
        console.log(erro)
    }

    
}

executaPromise()

// pending -> pendente
// fullfiled -> cumprido
// reject -> rejeitada