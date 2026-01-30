function Rodrigo(nome, sobrenome, altura, peso, jogo) {
    return {
        nome,
        sobrenome,
        altura,
        peso,
        jogo,

        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        get jogoFavorito() {

            return this.jogo

        },

        set jogoFavorito(jogo) {
            jogo = jogo.split(' ')
            this.jogo = jogo.join(' ')
        },

        get imc() {
            const imc = this.peso / (this.altura ** 2)
            return imc.toFixed(2)
        }
    }
}

const eu = Rodrigo('Rodrigo', 'Souza', 1.81, 85, 'Tibia')

eu.nomeCompleto = 'Rodrigo Henrique Souza Oliveira'
eu.jogoFavorito = 'Counter-Strike 2'

console.log(eu)