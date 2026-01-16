const inputTexto = document.querySelector('.input-texto')
const lista = document.querySelector('.lista')
const botao_tarefa = document.querySelector('.botao_tarefa')

inputTexto.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        if (!inputTexto.value) return
        criarTarefas(inputTexto.value)
    }
})

function criarLi() {
    const li = document.createElement('li')
    return li
}

function botaoApagarLi(li) {
    li.innerText += ' '
    const botao = document.createElement('button')
    botao.innerText = 'Apagar'
    botao.setAttribute('class', 'Apagar')
    botao.setAttribute('title', 'Apaga a tarefa')
    li.appendChild(botao)
}

document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('Apagar')) {
        el.parentElement.remove()
        salvarTarefa()
    }
})

botao_tarefa.addEventListener('click', function() {
    if(!inputTexto.value) return
    criarTarefas(inputTexto.value)
})

function criarTarefas(textoInput) {
    const li = criarLi()
    li.innerText = textoInput
    lista.appendChild(li)
    botaoApagarLi(li)
    limparInput()
    salvarTarefa()
}

function limparInput() {
    inputTexto.value = ''
    inputTexto.focus()
}

function salvarTarefa() {
    const liLista = lista.querySelectorAll('li')
    const listaDeTarefas = []

    for (tarefa of liLista) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefas = JSON.parse(tarefas)
    
    for(let tarefa of listaTarefas) {
        criarTarefas(tarefa)
    }
}

adicionaTarefasSalvas()