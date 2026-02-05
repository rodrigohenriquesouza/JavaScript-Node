// revisao filter() map()

const pessoa = [
    {nome: 'Rodrigo', idade: 23}
]

const profissaoPessoa = pessoa.map(obj => {
    const novoObjeto = { ...obj }
    novoObjeto.profissao = 'Rodrigo'
    return novoObjeto
})

const soNome = pessoa.map(obj => ({nome: obj.nome}))
const soIdade = pessoa.map(obj => ({idade: obj.idade}))

const numeros = [1, 25, 26, 70, 80, 90, 100, 15, 30, 45, 24, 5, 2, 8, 6]

const numerosImpar = numeros.filter(valor => valor % 2 !== 0)

const nomes = [
    {nome: 'Rodrigo'},
    {nome: 'Leonardo'},
    {nome: 'Maite'},
    {nome: 'Jessica'},
    {nome: 'Pedro'}
]

const terminaO = nomes.filter(obj => obj.nome.endsWith('o'))

const eu = ['Rodrigo']
const programador = eu.splice(0, 1)

eu.splice(0, 0, 'Rodrigo', 'Datan', 'Vitor', 'Jessica', 'Fernanda', 'Salvador')
console.log(eu)


