import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha')
const caracteres = document.querySelector('.qtd-carac')
const lMaiusculas = document.querySelector('.chk-maiusculas')
const lMinusculas = document.querySelector('.chk-minusculas')
const numeros = document.querySelector('.chk-numeros')
const simbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gera-senha')

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
}

function gera() {
    const senha = geraSenha(
        caracteres.value,
        lMaiusculas.checked,
        lMinusculas.checked,
        numeros.checked,
        simbolos.checked
    )
    return senha
}