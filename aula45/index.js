// return
// Retorna um valor
// Termina a função

/* function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}

const p1 = criaPessoa('Luiz', 'Otávio')
const p2 = {
    nome: 'João',
    sobrenome: 'Henrique'
}

console.log(typeof p1)
console.log(typeof p2) */

/* function bonecoLol(primeiroNome) {
    function bonecoLol2(segundoNome) {
        return primeiroNome + " " + segundoNome
    }
    return bonecoLol2
}

const primeiroNome = bonecoLol('Lee')
const segundoNome = primeiroNome('Sin')

console.log(segundoNome) */

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(10))
console.log(triplica(2))
console.log(quadriplica(2))

function bonecoPromotion(firstName) {
    return function(secondName) {
        return firstName + " " + secondName
    }
}

const firstName = bonecoPromotion('Elite')
const secondName = firstName('Knight')
console.log(secondName)