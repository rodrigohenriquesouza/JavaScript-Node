class ValidaForm {
    constructor() {
        this.formulario = document.querySelector('.form')
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
        this.handleEvent()
    }

    handleSubmit() {
        
    }


}