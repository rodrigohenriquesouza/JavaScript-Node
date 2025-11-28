/* 
Primitivos (imutáveis) - string, number, boolean, undefined
null (bigint, symbol) - Valor

Referência (mutável) - Array, Objeto, Function()
*/


/*
let a = 'A'
let b = a // copia

console.log(a, b)

a = 'Outra coisa'

console.log(a, b)
*/

/*let a = [1, 2, 3]
let b = [...a] // nesse caso o valor de b é totalmente independente
let c = b

console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(b, a)

a.unshift('Luiz')
console.log(a, c)*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'

}

const b = {...a}
a.nome = 'João'

console.log(a, b)