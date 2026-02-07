/* 
Object.values - pego os valores do meu objeto
Object.entries - pego as entradas, chave e valor
Object.getOwnPropertyDescriptor(objeto, 'propriedade') - pego as proriedades de um objeto
Object.getOwnPropertyDescriptors(objeto, 'propriedade', 'propriedade') - pego as proriedades de uvarios objetos
Object.assign(objeto destino, any)
... (spread)
*/

// Ja vimos
// Object.keys() - vejo as chaves do meu obj
// Object.freeze() - congelo meu objeto, assim ele não consegue receber mudanças
// Object.definerProperties() - define varias propriedades, enumerable, writable, configurable, value
// Object.defineProperty() - define uma propriedade, enumerable, writable, configurable, value

const produto = {nome: 'Saco de pancada', preco: 200}

const produto2 = Object.assign(produto, 'nome', {cor: 'vermelha'})
console.log(produto2)

// console.log(Object.getOwnPropertyDescriptors(produto, 'nome', 'preco'))

/* for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
} */

/* for(let valor of Object.values(produto)) {
    console.log(valor)
} */


