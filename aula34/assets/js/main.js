const elementos = [
    {tag: 'p', texto: 'Testando'},
    {tag: 'div', texto: 'Exercicio'},
    {tag: 'section', texto: 'Novamente'},
    {tag: 'footer', texto: 'Teste'}
]


const container = document.querySelector('.container')
const div = document.createElement('div')

for (i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto
    div.appendChild(tagCriada)
}

container.appendChild(div)