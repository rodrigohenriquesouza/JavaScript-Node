const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiusculas = () => String.fromCharCode(rand(65, 91))
const geraMinusculas = () => String.fromCharCode(rand(97, 123))
const geraNumeros = () => String.fromCharCode(rand(48, 58))
const simbolos = './?$%¨*!@_'
const geraSimbolos = () => simbolos[rand(0, simbolos.length)]




export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senha = []
    qtd = Number(qtd)

    for(let i = 0; i < qtd; i++) {
        maiusculas && senha.push(geraMaiusculas())
        minusculas && senha.push(geraMinusculas())
        numeros && senha.push(geraNumeros())
        simbolos && senha.push(geraSimbolos())
    }
        return senha.join('').slice(0, qtd)
}