// Some todos os numeros

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
  
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador += valor
    return acumulador
}, 0)

/* pequeno teste
const nums2 = [5, 5, 10, 7, 10]
const total2 = nums2.reduce((acml, valor) => {
    acml += valor
    return acml
}, 0)
console.log(total2) */


// Retorne a pessoa mais velha

const pessoas = [
     {nome: 'Rodrigo', idade: 23},
    {nome: 'Luiz', idade: 62},
    {nome: 'Natalia', idade: 17},
    {nome: 'Mauricio', idade: 25},
    {nome: 'Eduarda', idade: 55},
    {nome: 'Wallace', idade: 47}
 ]

const maisExperiente = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
}, 0)

console.log(maisExperiente)