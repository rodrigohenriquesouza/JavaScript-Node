const inputTarefa = document.querySelector('.input-texto')
const botao = document.querySelector('.botao-tarefa')
const lista = document.querySelector('.lista')

function criaListItem() {
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

botao.addEventListener('click', function() {
    if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){
    const elemento = e.target
    if(elemento.classList.contains('Apagar')) {
        elemento.parentElement.remove()
        salvarTarefas()
    }
})

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function botaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'Apagar')
    botaoApagar.setAttribute('title', 'Apaga a tarefa')
    li.appendChild(botaoApagar)
}


function criaTarefa(textoInput) {
    const li = criaListItem()
    li.innerText = textoInput
    lista.appendChild(li)
    botaoApagar(li)
    limpaInput()
}
