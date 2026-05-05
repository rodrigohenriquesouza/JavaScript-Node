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
            this.mostraDisplay(el.innerText)
        }
            if(el.classList.contains('btn-del')) {
                this.apagaUm()
            }
        })

        
    }

    apagaUm() {
        this.display.value = this.display.value.slice(0, -1)
    }

    mostraDisplay(num) {
        this.display.value += num
    }
}

const calculadora = new Calculadora

calculadora.iniciaCalculadora()