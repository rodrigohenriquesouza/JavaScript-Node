class Calculadora {
    constructor() {
        this.display = document.querySelector('.display')
    }

    inicia() {
        this.cliqueBotoes()
    }

    clearDisplay() {
        this.display.value = ''
    }

    cliqueBotoes() {
        document.addEventListener('click', e => {
            const el = e.target

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText)
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }
        })
    }

    btnParaDisplay(valor) {
        this.display.value += valor
    }
}

const calculadora = new Calculadora()
calculadora.inicia()