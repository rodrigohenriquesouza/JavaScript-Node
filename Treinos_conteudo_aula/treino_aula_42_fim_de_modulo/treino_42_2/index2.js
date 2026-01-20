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

function criarTarefa() {
    const tarefa = document.createElement('li')
    return tarefa
}

function ListaDeTarefas (inputTexto) {
    const tarefa = criarTarefa()
    tarefa.innerText = inputTexto
    listaTarefas.appendChild(tarefa)
}