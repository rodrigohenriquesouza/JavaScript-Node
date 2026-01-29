function criaPesso(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} esta ${assunto}`
        },
        peso: 80
    }
}

const p1 = criaPesso('Rodrigo', 'Souza')
const p2 = criaPesso('Nat', 'Oliveira')

console.log(p2.fala('falando que irá dormir'))