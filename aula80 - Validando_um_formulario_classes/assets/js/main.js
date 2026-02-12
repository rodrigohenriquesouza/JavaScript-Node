class ValidarFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.eValido()
    }

    eValido() {
        let valid = true   

        for(let msgErro of this.formulario.querySelectorAll('.msg-erro')) {
            msgErro.remove()
        }

         for(let campo of this.formulario.querySelectorAll('.validar')) {

            let label = campo.previousElementSibling.innerText
            if(!campo.value) {  
                this.erroMsg(campo, `O campo "${label}" precisa ser preenchido`)
                valid = false
            }
        }
    }

    erroMsg(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('msg-erro')
        campo.insertAdjacentElement('afterend', div)
    }
}

const validaForm = new ValidarFormulario()