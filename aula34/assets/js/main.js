const fighters = [
    {tag: 'p', fighter: 'Charles Oliveira'},
    {tag: 'section', fighter: 'Dustin Poirier'},
    {tag: 'footer', fighter: 'Max Holloway'},
    {tag: 'h1', fighter: 'Arman Tsarukyan'}
]

const div = document.createElement('div')
const container = document.querySelector('.container')

for (i = 0; i < fighters.length; i++) {
    let {tag, fighter} = fighters[i]
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = fighter
    div.appendChild(tagCriada)  
}

container.appendChild(div)


