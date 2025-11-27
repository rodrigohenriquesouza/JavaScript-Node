// Treinando metodos e algumas manipulações de array básicas

let num = Math.random()
let arr = ['Rodrigo', 'Nati', 'Ester']

console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))
console.log(Math.max(1, 2, 3, -10, 10))
console.log(Math.min(1, 2, -10, 10, -100, 37))

console.log(arr)

arr.push('Mauricio')
console.log(arr)
arr.unshift('Maurét')
console.log(arr)

let removidos = arr.pop()
console.log(removidos)
console.log(arr)
let removidoPrimeiro = arr.shift()
console.log(removidoPrimeiro)
console.log(arr)
