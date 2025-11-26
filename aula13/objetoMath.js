
// Math.ceil() Arredondar para cima
// Math.floor() Arredondando para baixo
// Math.round() Arredondando para o mais proximo
// Math.random() Gerar numero aleatorio entre 0 e 1
// Math.max() Verficiar o maior numero de uma lista por exemplo
// Math.min() Verficiar o menor numero de uma lista por exemplo


let nfloat1 = 30.3
console.log(Math.floor(nfloat1))

let nfloat2 = 30.6
console.log(Math.ceil(nfloat2))

let nfloat3 = 30.5
console.log(Math.round(nfloat3))

let number = 0
console.log(Math.random(number) + 3)

let numbers = [5, 50, 10, 20, -10, 100, -100, 30, 40, 22, 20]
console.log(numbers.indexOf(20))
console.log(numbers.lastIndexOf(20))

let carros = ['Camaro', 'Lamborghini', 'Corolla', 'BMW']
console.log(carros)
console.log(carros.includes('Camaro'))

let rodrigo = 'No caminho para se tornar desenvolvedor'
console.log(rodrigo)
rodrigo = rodrigo.replace('No', 'Se')
rodrigo = rodrigo.replace('caminho', 'tornou')
rodrigo = rodrigo.replace('para', '')
rodrigo = rodrigo.replace('se', '')
rodrigo = rodrigo.replace('tornar', '')
console.log(rodrigo)

console.log(Math.max(5, 50, 10, 20, -10, 100, -100, 30, 40, 22, 20))
console.log(Math.min(5, -5, 10, -10, 100, -100, 30, -30, 50, -50))