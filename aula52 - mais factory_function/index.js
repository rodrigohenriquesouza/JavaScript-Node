// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa (nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 1234

    const metodoInterno = function() {

    }

    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome  = sobrenome 

    this.metodo = function () {
        console.log(this.nome + ': sou um metodo')
    }
}   

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Rodrigo', 'Souza')   

p1.metodo()