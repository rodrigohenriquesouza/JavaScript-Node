function scriptCalculadora() {
    return {
        display: document.querySelector('.display'),

        iniciaCalculadora() {
            this.botoesCalculadora()
            this.resultadoEnter()
            this.apagarBackSpace
        },

        resultadoEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) {
                    this.fazerAconta()
                }
            })
        },

         apagarBackSpace() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 8) {
                    this.apagarUmNum()
                }
            })
            },


        botoesCalculadora() {
            document.addEventListener('click', (e) => {
                const elemento = e.target

                if(elemento.classList.contains('btn-clear')) {
                    this.limparDisplay()
                }
                if(elemento.classList.contains('btn-num')) {
                    this.botaoParaDisplay(elemento.innerText)
                }
                if(elemento.classList.contains('btn-del')) {
                    this.apagarUmNum()
                }
                if(elemento.classList.contains('btn-eq')) {
                    this.fazerAconta()
                }
            })
        },

        fazerAconta() {
            let conta = this.display.value

            try {
                conta = eval(conta)
                if(!conta) {
                    return alert('Conta invalida')
                }
            } catch (e) {
                return alert('Conta inválida')
            }

            this.display.value = conta
        },

        apagarUmNum() {
            this.display.value = this.display.value.slice(0, -1)
        },

        botaoParaDisplay(botao) {
            this.display.value += botao
        },

        limparDisplay() {
            this.display.value = ''
        } 
    }
}


const calculadora = scriptCalculadora()
calculadora.iniciaCalculadora()
