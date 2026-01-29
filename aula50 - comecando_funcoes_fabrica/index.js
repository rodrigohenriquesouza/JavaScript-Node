// Factory function (Função fábrica)
// Constructor function (Funlçao construturoa)
function criaPesso(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala(assunto = 'falando sobre NADA.') {
            return `${this.nome} esta ${assunto}`
        },
        altura: altura,
        peso: peso,

//      Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPesso('Rodrigo', 'Souza', 1.81, 90)
p1.nomeCompleto = 'Natalia Oliveira Souza'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)
console.log(p1.fala())

