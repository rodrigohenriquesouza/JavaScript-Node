function criaCalculadora() {
    return {
        display: document.querySelector('.display'),


        inicia() {
            this.cliqueBotoes()
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
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
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()