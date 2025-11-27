let amigos = ['Gustavo', 'Mauricio']
amigos.push('Maurét') // .push() - Adiciono um elemento no final do array
console.log(amigos)

amigos.unshift('Nati') // .unshift() - Adiciono um elemento no começo do array    *Menos utilizado pode prejudiciar o sistema se muito usado
console.log(amigos)
amigos.push('Joey')
console.log(amigos)

let removidos = amigos.pop() // .pop() - Remove um elemento no final do array
console.log(removidos)
console.log(amigos)

let removidos2 = amigos.shift() // .shift() - Remove um elemento no começo do array
console.log(removidos2)
console.log(amigos)

console.log(amigos.slice(0, 2)) // .slice() - Fatio até onde eu quero mostrar meu array. Sendo que o segundo número tem que ser um índice a mais caso eu queria mostrar o mesmo.  Exemplo slice(0, 2) - Irá mostrar 0 e 1   slice(0, 3) - Irá mostrar 0, 1 , 2