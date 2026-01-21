// argumentos que sustenta todos os argumentos enviados. Utilizo "arguments" para pegar esses argumentos porém só funciona nas functions que contem a palavra "function" não funciona para arrow functions
/* 
function funcao() {
    let total = 0

    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7)
 */

function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

const pessoa = ['Rodrigo', 'Souza', 23]

//let obj = {nome: 'Rodrigo', sobrenome: 'Souza', idade: 23}

funcao(pessoa)