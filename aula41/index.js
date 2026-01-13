function relogio() {


function pegarSegundos(seg) {
    const data = new Date(seg * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio')
let segundos = 0
let timer

function iniciarRelogio() {
   timer = setInterval(function() {
        segundos++
    relogio.innerHTML = pegarSegundos(segundos)
    }, 1000)
}

document.addEventListener('click', function(e) {
    const elementoTargetado = e.target

    if (elementoTargetado.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciarRelogio()
    }

    if (elementoTargetado.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        clearInterval(timer)
    }

    if (elementoTargetado.classList.contains('zerar')) {
        clearInterval(timer)
        relogio.classList.remove('pausado')
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }
})
}

relogio()