// map() - Altera os valores. Sempre vai ter o mesmo tamanho do array original
// Dobre os numeros
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
    const numerosDobrados = numeros.map(n => n * 2)
    console.log(numerosDobrados)


    const pessoas = [
        {nome: 'Rodrigo', idade: 23},
        {nome: 'Luiz', idade: 62},
        {nome: 'Natalia', idade: 17},
        {nome: 'Mauricio', idade: 25},
        {nome: 'Eduarda', idade: 55},
        {nome: 'Wallace', idade: 47}
    ]


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
const stringPessoas = pessoas.map(obj => obj.nome)
console.log(pessoas)
console.log(stringPessoas)



// Remova apenas a chave "nome" do objeto
const idadePessoas = pessoas.map(obj => ({idade: obj.idade}))

console.log(idadePessoas)

// Adicione uma chave id em cada objeto
const chaveID = pessoas.map((obj, indice) => {
    const newObject = { ...obj }
    newObject.id = (indice + 1) * 1000
    return newObject
})

console.log(pessoas)
console.log(chaveID)


