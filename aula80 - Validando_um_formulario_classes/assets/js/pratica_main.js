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

        for(let input of this.formulario.querySelectorAll('.validar')) {
            
        }
    }
}

const form = new ValidaForm()