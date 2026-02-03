// Função Geradora

 function* geradora1 () {
    yield 1
    yield 2
    yield 3
}

function* geradora2 () {
    yield*gerar1
    yield 4
    yield 5
    yield 6
}

const gerar1 = geradora1()
const gerar2 = geradora2()

console.log(gerar2.next().value)
console.log(gerar2.next().value)

 function* nomeSobrenome() {
    yield function() {
        console.log('Rodrigo')
    }
    yield function() {
        console.log('Souza')
    }
}

const nomeSobrenomee = nomeSobrenome()
const nome = nomeSobrenomee.next().value
const sobrenome = nomeSobrenomee.next().value

nome()
sobrenome()


function* amigosFaculdade() {
    yield function() {
        console.log('Datan')
    }
    yield function() {
        console.log('Charada')
    }
    yield function() {
        console.log('Sid')
    }
}

function* amiga() {
    yield*amigos
    yield function() {
        console.log('Nat')
    }
}

const amigos = amigosFaculdade()
const amigaa = amiga()

const amigoDatan = amigaa.next().value
const amigoSid = amigaa.next().value
const amigoCharada = amigaa.next().value
const amigaNat = amigaa.next().value

amigoDatan()
amigoCharada()
amigoSid()
amigaNat()