/* 
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8de altura e seu IMC é de 25.92592595
Luiz Otávio nasceu em: 
*/

const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 36
const peso = 84
const altura = 1.80
let imc // peso / (altura ao quadrado)
imc = peso / (altura * altura)
let anoNascimento
anoNascimento = 2025 - idade


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg`)
console.log('Tem ' + 1.8 + ' de altura e seu IMC é de: ' + imc)
console.log(`${nome} nasceu em: ${anoNascimento}`)



