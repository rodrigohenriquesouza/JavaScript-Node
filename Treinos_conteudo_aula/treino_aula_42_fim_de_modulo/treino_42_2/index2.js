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
        salvarTarefas()
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
    salvarTarefas()
}

function salvarTarefas() {
    const tarefas = document.querySelectorAll('li')
    const listaTarefasArr = []

    for (tarefa of tarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Remover', '').trim()
        listaTarefasArr.push(tarefaTexto)
    }
    
    const salvarTarefasJSON = JSON.stringify(listaTarefasArr)
    localStorage.setItem('tarefas', salvarTarefasJSON)
}

function pegarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefas = JSON.parse(tarefas)

    for (tarefa of listaTarefas) {
        ListaDeTarefas(tarefa)
    }
}

pegarTarefasSalvas()