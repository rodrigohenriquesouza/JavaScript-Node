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

        for(let field of this.formulario.querySelectorAll('.test')) {
            if(!field.value) {
                this.throwError(field, 'Msg erro')
                valid = false
            }
        }

        return valid
    }

    throwError(field, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('throw-erro')
        field.insertAdjacentElement('afterend', div)
    }
}

const valid = new FormValid()