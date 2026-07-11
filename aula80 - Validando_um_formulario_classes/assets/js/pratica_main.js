class FormValid {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.events()
    }

    events() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const fieldChecked = this.fieldChecked()
    }

    fieldChecked() {
        let valid = true

        for(let throwErro of this.formulario.querySelectorAll('.throw-erro')) {
            throwErro.remove()
        }

        for(let field of this.formulario.querySelectorAll('.test')) {
            let label = field.previousElementSibling.innerText

            if(!field.value) {
                this.throwError(field, `Msg erro ${label}`)
                valid = false
            }

            if(field.classList.contains('cpf')) {
                if(!this.validCpf(field)) valid = false
            }

            if(field.classList.contains('usuario')) {
                if(!this.validUser(field)) valid = false
            }
        }
  }

  validCpf(field) {
    const cpf = new ValidaCPF(field.value)

    if(!cpf.valida()) {
        this.throwError(field, 'CPF INVÁLIDO')
        return false
    }  

    return true
  }

    throwError(field, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('throw-erro')
        field.insertAdjacentElement('afterend', div)
    }
}

const valid = new FormValid()