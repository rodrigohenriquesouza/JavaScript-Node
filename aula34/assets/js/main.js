const lutadoresUFC = [
    {tag: 'h1', lutador: 'Lutadores'},
    {tag: 'p', lutador: 'Charles Do Bronx'},
    {tag: 'div', lutador: 'Jon Jones'},
    {tag: 'footer', lutador: 'Valter Walker'},
    {tag: 'section', lutador: 'Carlos Prates'}
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (i = 0; i < lutadoresUFC.length; i++) {
    let {tag, lutador} = lutadoresUFC[i]
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = lutador
    div.appendChild(tagCriada)
}

container.appendChild(div)