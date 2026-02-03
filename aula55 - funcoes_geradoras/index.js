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

