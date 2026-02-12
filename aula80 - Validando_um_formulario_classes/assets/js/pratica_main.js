class ValidaForm {
    constructor() {
        this.formulario = document.querySelector('.form')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const validaInputs = this.inputsValids()
    }

    inputsValids() {
        let valid = true

        for(let input of this.formulario.querySelectorAll('.validar')) {
            if(!input.value) {
                this.throwError(input, 'O campo precisa ser preenchido')
            }
        }
    }

    throwError(input, msg) {
        const divMsg = document.createElement('div')

    }
}

const form = new ValidaForm()