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

        for(let erroText of this.formulario.querySelectorAll('.msg-erro')) {
            erroText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText

            if(!campo.value) {
                this.textErro(campo, `${label} Não pode estar em branco`)
                valid = false
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false
            }
        }
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valid()) {
            this.textErro(campo, 'CPF INVÁLIDO')
            return false
        }

        return true
    }

    textErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('msg-erro')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaForm()