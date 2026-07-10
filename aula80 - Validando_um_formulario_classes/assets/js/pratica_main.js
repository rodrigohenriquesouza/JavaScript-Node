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
        const fieldChecked = this.fieldCheked()
    }

    fieldChecked() {
        let valid = true

        for(let field of this.formulario.querySelectorAll('.test')) {
            
        }
    }
}

const valid = new FormValid()