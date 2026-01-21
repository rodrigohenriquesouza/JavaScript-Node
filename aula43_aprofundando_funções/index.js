// Declaração de função (Function hoisting)
falaOi()
function falaOi() {
    console.log('Oi')
}

// Frist-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.')
}

souUmDado()

/* 
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao()
}

executaFuncao(souUmDado) */

// Arrow function 

const funcaoArrow = () => {
    console.log('Sou uma arroz function')
}

funcaoArrow()

// Dentro de um objeto eu posso ter uma função

const obj = {
    falar() {
        console.log('Estou falando...')
    }
}

obj.falar()
