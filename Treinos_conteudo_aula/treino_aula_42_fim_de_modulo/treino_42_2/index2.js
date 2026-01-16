const inputTexto = document.querySelector('.input-texto')
const lista = document.querySelector('.lista')

inputTexto.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        if (!inputTexto.value) return
        const li = criarLi()
        li.innerText = inputTexto.value
        lista.appendChild(li)

        inputTexto.value = ''
    }
})

function criarLi() {
    const li = document.createElement('li')
    return li
}