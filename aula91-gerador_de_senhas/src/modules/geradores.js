const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiscula = () => String.fromCharCode(rand(65, 91))
const geraMinusculas = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = '.,/?^~`´[&%]\|#@!(*{}_'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const arraySenha = []
    qtd = Number(qtd)

    for(let i = 0; i < qtd; i++) {
        maiusculas && arraySenha.push(geraMaiscula())
        minusculas && arraySenha.push(geraMinusculas())
        numeros && arraySenha.push(geraNumero())
        simbolos && arraySenha.push(geraSimbolo())
    }

    return arraySenha.join('').slice(0, qtd)
}



