// IIFE -: Immediately invoked function expression

(function(idade, peso, altura) {

    const sobrenome = 'Souza'
    function criaNome(nome) {
        return nome + " " + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Rodrigo'))
    }
    falaNome()
    console.log(idade, peso, altura)

})(23, 110, 1.81)

const nome = 'Qualqer'