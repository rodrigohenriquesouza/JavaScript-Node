class Form {
    constructor() {
        this.form = document.querySelector('.form')
        this.event()
    }

    event() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        const fieldsValid = this.fieldsValid()
    }

    fieldsValid() {
        for(let field of this.form.querySelectorAll('#valid')) {
            if(!field.value) {
                this.throwError(field, `O campo precisa ser preenchido`)
            }
        }
    }

    
}

const form = new Form()