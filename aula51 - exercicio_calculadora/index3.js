class Calculadora {
    constructor() {
        this.display = document.querySelector('.display')
    }

    iniciaCalculadora() {
        this.pegaCliques()
    }
    pegaCliques() {
        document.addEventListener('click', e => {
            const el = e.target

            if(el.classList.contains('btn-num')) {
                this.mostraNoDisplay(el.innerText)
            }
            if(el.classList.contains('btn-del')) {
                this.apagaUmNum()
            }
            if(el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }
            if(el.classList.contains('btn-equal')) {
                this.fazConta(this.display.value)
            }
        })
    }

    fazConta(numero) {
        let conta

        try {
             conta = eval(numero)
        } catch {
            console.log('ERROR, conta inválida')
            return
        }
        this.display.value = conta
    }

    clearDisplay() {
        this.display.value = ''
    }

    mostraNoDisplay(num) {
        this.display.value += num
    }
    apagaUmNum() {
        this.display.value = this.display.value.slice(0, -1)
    }
}

const calculadora = new Calculadora
calculadora.iniciaCalculadora()