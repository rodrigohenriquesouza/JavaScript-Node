const input = document.querySelector('.input-texto')
const botaoTarefa = document.querySelector('.botao-tarefa')
const listaTarefas = document.querySelector('.lista-tarefas')

document.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        if(!input.value) return
        ListaDeTarefas(input.value)
    }
})

botaoTarefa.addEventListener('click', function() {
    if (!input.value) return
        ListaDeTarefas(input.value)
})

function botaoApagarTarefa(tarefa) {
    tarefa.innerText += ' '
    const botao = document.createElement('button')
    botao.innerText = 'Remover'
    botao.setAttribute('class', 'botaoApagar')
    botao.setAttribute('title', 'Remove a tarefa da lista')
    tarefa.appendChild(botao)
}

document.addEventListener('click', function(evento) {
    const el = evento.target
    if(el.classList.contains('botaoApagar')) {
        el.parentElement.remove()
    }
})

function resetarInput() {
    input.value = ''
    input.focus()
}

function criarTarefa() {
    const tarefa = document.createElement('li')
    return tarefa
}

function ListaDeTarefas (inputTexto) {
    const tarefa = criarTarefa()
    tarefa.innerText = inputTexto
    listaTarefas.appendChild(tarefa)
    botaoApagarTarefa(tarefa)
    resetarInput()
}