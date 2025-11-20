// Constant precisam ter nomes significativos
// Não pode começar o nome de uma constant com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não utilizar var, Utilize const
// Valor da const nunca muda!

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado += 5
console.log(resultadoTriplicado)

console.log(typeof resultadoTriplicado)