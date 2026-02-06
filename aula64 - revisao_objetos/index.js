    /* const pessoa = {
        nome: 'Rodrigo',
        idade: 23,
        profissao: 'DEV'
    }

    const profissao = 'profissao'
    console.log(pessoa[profissao]) */

/* const p1 = new Object()

p1.nome = 'Rodrigo'
p1.sobrenome = 'Souza'
p1.idade = 23
p1.falaProfissao = function () {    
    return `${this.nome} ${this.sobrenome}, trabalha como programador`
}
p1.getDataDeNascimento = function () {
    const data = new Date()
    return 'Nasceu em: ' + (data.getFullYear() - this.idade)
}

for (chave in p1) {
    console.log(p1[chave])
} */

// Factory functions 
/* function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get falaNome() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
 */

// Constructor functions

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Rodrigo', 'Souza')
