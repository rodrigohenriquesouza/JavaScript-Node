const inputTarefa = document.querySelector('.input-texto')
const botao = document.querySelector('.botao-tarefa')
const lista = document.querySelector('.lista')

function criaListItem() {
    const li = document.createElement('li')
    return li
}

function criaTarefa(textoInput) {
    const li = criaListItem()
    li.innerText = textoInput
    lista.appendChild(li)
    limpaInput()
}

function botaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.setAttribute('class', 'botaoApaga')
    botaoApagar.setAttribute('title', 'Apaga a tarefa')
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        if (!inputTarefa.value) {
            return criaTarefa(inputTarefa.value)
        }
    }
})

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}