const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiscula = () => String.fromCharCode(rand(65, 91))
const geraMinusculas = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = '.,/?^~`´[&%]\|#@!(*{}_'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]
console.log(geraMaiscula())
console.log(geraMinusculas())
console.log(geraNumero())
console.log(geraSimbolo())