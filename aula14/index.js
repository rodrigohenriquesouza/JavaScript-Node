const n = Number(prompt('Digite um número: '))
console.log(n)

const raizQuadrada = Math.sqrt(n)
const inteiro = Number.isInteger(n)
const paraCima = Math.ceil(n)
const paraBaixo = Math.floor(n)
const casaDecimais = n.toFixed(2)

document.body.innerHTML = `<h1>Seu número é: ${n}</h1>`
document.body.innerHTML += `<p>Raiz quadrada: ${raizQuadrada}</p>`
document.body.innerHTML += `<p>${n} é inteiro -> ${inteiro}</p>`
document.body.innerHTML += `<p>É NaN? -> ${Number.isNaN(n)}`
document.body.innerHTML += `<p>Arredondando para cima: ${paraCima}`
document.body.innerHTML += `<p>Arredondando para baixo: ${paraBaixo}`
document.body.innerHTML += `<p>Com Duas casas decimais: ${casaDecimais}`