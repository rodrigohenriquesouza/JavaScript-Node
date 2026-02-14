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
    
     const resultados = await Promise.all([
        esperaAi('TESTE 1', rand()),
        esperaAi('TESTE 2', rand()),
        esperaAi('TESTE 3', rand())
        ])
        
        console.log(resultados)
    } catch(erro) {
        console.log(erro)
    }

    
}

executaPromise()

// pending -> pendente
// fullfiled -> cumprido
// reject -> rejeitada