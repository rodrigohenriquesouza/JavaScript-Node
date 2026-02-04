// Filter - sempre irá retornar um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosFiltrados = numeros.filter(valor => valor > 10)
// console.log(numerosFiltrados)

const pessoas = [
    {nome: 'Rodrigo', idade: 23},
    {nome: 'Luiz', idade: 62},
    {nome: 'Natalia', idade: 17},
    {nome: 'Mauricio', idade: 25},
    {nome: 'Eduarda', idade: 55},
    {nome: 'Wallace', idade: 47}
]

// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoasNomeGrande)

// Retorne as pessoas com mais de 50 anos
const pessoas50mais = pessoas.filter(obj => obj.idade > 50)
console.log(pessoas50mais)

// Retorne as pessoas cujo nome termina com a
const pessoaTerminaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoaTerminaA)
