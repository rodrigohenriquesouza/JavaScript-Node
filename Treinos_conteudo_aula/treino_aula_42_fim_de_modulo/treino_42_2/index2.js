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

botao_tarefa.addEventListener('click', function() {
    if(!inputTexto.value) return
    criarTarefas(inputTexto.value)
})

document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('Apagar')) {
        el.parentElement.remove()
    }
})

function criarTarefas(textoInput) {
    const li = criarLi()
    li.innerText = textoInput
    lista.appendChild(li)
    botaoApagarLi(li)
    limparInput()
}

function limparInput() {
    inputTexto.value = ''
    inputTexto.focus()
}