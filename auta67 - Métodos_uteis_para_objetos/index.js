/* 
Object.values
Object.entries
Object.getOwnPropertyDescriptor(objeto, 'propriedade')
Object.assign(objeto destino, any)
... (spread)
*/

// Ja vimos
// Object.keys() - vejo as chaves do meu obj
// Object.freeze() - congelo meu objeto, assim ele não consegue receber mudanças
// Object.definerProperties() - define varias propriedades, enumerable, writable, configurable, value
// Object.defineProperty() - define uma propriedade, enumerable, writable, configurable, value

const produto = {nome: 'Saco de pancada', preco: 200}



for(let valor of Object.values(produto)) {
    console.log(valor)
}


