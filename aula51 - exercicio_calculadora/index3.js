class Calculadora {
    constructor() {
        this.display = document.querySelector('.display')
    }

    inicia() {
        this.cliqueBotoes()
        this.contaEnter()
    }

    clearDisplay() {
        this.display.value = ''
    }

    apagaUm() {
        this.display.value = this.display.value.slice(0, -1)
    }

    contaEnter() {
        this.display.addEventListener('keydown', e => {
            if(e.key === 'Enter') {
                this.fazConta()
            }
        })
    }

    fazConta() {
        let conta = this.display.value

        try {
            conta = eval(conta)

            if(!conta) {
                
                return
            }

            this.display.value = conta
        } catch(e) {
            alert('Conta inválida')
            return
        }
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
            if(el.classList.contains('btn-del')) {
                this.apagaUm()
            }

            if(el.classList.contains('btn-equal')) {
                this.fazConta()
            }
        })
    }

    btnParaDisplay(valor) {
        this.display.value += valor
    }
}

const calculadora = new Calculadora()
calculadora.inicia()