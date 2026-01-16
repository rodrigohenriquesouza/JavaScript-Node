const inputTarefa = document.querySelector('.input-texto')
const botao = document.querySelector('.botao-tarefa')
const lista = document.querySelector('.lista')

function criaListItem() {
    const li = document.createElement('li')
    return li
}

function criaTarefa(textoInput) {
    const li = criaListItem()
    
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        if (!inputTarefa.value) {
            return criaTarefa(inputTarefa.value)
        }
    }
})

function limpaImput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}