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
        console.log('Formulario não enviado')
    }
}

const valid = new FormValid()