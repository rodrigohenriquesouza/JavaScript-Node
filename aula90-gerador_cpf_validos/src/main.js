import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css'

function mostraNaTela() {
    const cpf = document.querySelector('.cpf-gerado')
    const gerador = new GeraCPF()
    cpf.innerHTML = gerador.geraCPF()
}

mostraNaTela()