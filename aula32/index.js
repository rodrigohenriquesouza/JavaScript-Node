const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Souza', 
    idade: 23,
    endereco: {
        rua: 'Rua Carlos Gomes',
        numero: 3943
    } 
}

// Atribuição via desestruturação

const { nome, sobrenome, ...restoProp} = pessoa
console.log(nome, sobrenome, restoProp)

/* const { endereco: {rua: r = 3234, numero}, endereco } = pessoa
console.log(r, numero, endereco) */