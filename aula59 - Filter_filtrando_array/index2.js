const lutadoresUFC = [
    {nome: 'Charles Oliveira', idade: 31, champion: true},
    {nome: 'Jon Jones', idade: 39, champion: true},
    {nome: 'Renato Moicano', idade: 34, champion: false},
    {nome: 'Valter Walker', idade: 28, champion: 'semi-deus'}
]

const lutadorMaior30 = lutadoresUFC.filter(obj => obj.idade > 30)
console.log(lutadorMaior30)

const jonJones = lutadoresUFC.filter(obj => obj.nome.toLowerCase().endsWith('s'))
console.log(jonJones)

const lutadorNomeGrande = lutadoresUFC.filter(obj => obj.nome.length >= 12)
console.log(lutadorNomeGrande)

const campeosUFC = lutadoresUFC.filter(obj => obj.champion === true)
console.log(campeosUFC)