const h1 = document.querySelector('.container h1')
const data = new Date()

function diaAtual(hoje) {

    switch (hoje) {

        case 0: return 'Domingo'
        case 1: return 'Segunda-feira'
        case 2: return 'Terça-feira'
        case 3: return 'Quarta-feira'
        case 4: return 'Quinta-feira'
        case 5: return 'Sexta-feita'
        case 6: return 'Sábado'
        default: return ''
    }
    
} 
 
h1.innerHTML = diaAtual(data.getDay())

/* const data = new Date()
const hoje = data.getDay()
const hojeTexto = diaAtual(hoje)

console.log(hojeTexto) */
