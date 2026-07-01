class ValidaForm {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
    this.formulario.addEventListener('submit', e => {
        this.handleSubmit(e)
    })
    }
    handleSubmit(evento) {
        evento.preventDefault()
       const checkField =  this.checkField()
    }
    checkField() {
        let valid = true

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            if(!campo.value) {
                this.textErro(campo, 'Campo testsetse')
                valid = false
            }
        }
    }
    textErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('msg-erro')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaForm()