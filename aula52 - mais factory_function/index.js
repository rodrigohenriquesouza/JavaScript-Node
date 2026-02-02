// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa (nome, sobrenome) {
    this.nome = nome
    this.sobrenome  = sobrenome 
}   

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Rodrigo', 'Souza')   