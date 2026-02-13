class ValidaForm {       // class para validar formulario
    constructor() {
        this.formulario = document.querySelector('.form')   //seleciono meu form com DOM
        this.eventos()         // crio meu evento assim que chamo a class
    }

    eventos() {                                                          // adiciono meu evento de submit
        this.formulario.addEventListener('submit', e => {      
            this.handleSubmit(e)
        })
    }
  
    handleSubmit(e) {                                          // lida com meu evento e o que fazer depois dele ser acionado
        e.preventDefault()
        const inputsValidados = this.inputsValids()            // metodos de validação do form
        const senhasValidadas = this.passwordValids()          // metodos de validação do form

        if(inputsValidados && senhasValidadas) {               // compara se os inputs e as senhas são validas para dar submit
            alert('Formulario feito sozinho enviado!')
            this.formulario.submit()
        }
    }

    passwordValids() {                                        // valida minha senha do formulario
        let valid = true                                                          

        const senha = document.querySelector('.senha')
        const repeteSenha = document.querySelector('.repetir-senha')

        if(senha.value.length !== repeteSenha.value.length) {      // compara se sao identicos o valor e o tamanho dos campos senha e repetir-senha
            this.throwError(senha, 'As senhas devem ser iguais!')
            this.throwError(repeteSenha, 'As senhas devem ser iguais!')
            valid = false
        }

        if(senha.value.length < 6 || senha.value.length > 12) {               // limite os caracteres entre 3 a 12 caracteres
            this.throwError(senha, 'Deve ter de 6 a 12 caracteres')
            valid = false
        }
        return valid
    }

    inputsValids() {                         // valida meus inputs do formulario (campos) Nome/Sobrenome/CPF
        let valid = true         // flag

       for(let errorText of this.formulario.querySelectorAll('.text-error')) {
        errorText.remove()
       }

        for(let input of this.formulario.querySelectorAll('.validar')) {        // itera sobre cara class ".validar" e seleciona os inputs
            const label = input.previousElementSibling.innerText                // seleciona o elemento irmão anterior ao input e pega o que da escrito nele e atribui a variavel "label"

            if(!input.value) {                                                            // lança o erro de campos vazios
                this.throwError(input, `O ${label} precisa ser preenchido!.`)    
                valid = false   
            }

            if(input.classList.contains('cpf')) {                           // lança o erro caso o CPF não seja valido
                if(!this.validaCPF(input)) valid = false
        }   

            if(input.classList.contains('usuario')) {                     // lança o erro caso o Usuario não atenda as condicionais
                if(!this.validUser(input)) valid = false
            }
    }
    return valid
}

    validUser(input) {
        let valid = true            // frag
        if(input.value.length < 3 || input.value.length > 12) {                   // compara o tamanho do input
            this.throwError(input, 'Usuário deve conter de 3 a 12 caracteres') 
            valid = false
        }
        if(!input.value.match(/^[a-zA-Z0-9]+$/)) {                                      // verifica se o valor do input de Usuário contém apenas números e letras
            this.throwError(input, 'Usuário deve conter apenas letras e/ou numeros')
            valid = false
        }
        return valid       // retorna a flag
    }

    validaCPF(input) {                                          // metodo que valida o CPF
        const cpf = new ValidaCPF(input.value)              // chama minha class ValidaCPF

        if(!cpf.valida()) {
            this.throwError(input, 'CPF inválido')
            return false
        }
        return true
    }

    throwError(input, msg) {                             // metodo que lança os erros
        const divMsg = document.createElement('div')
        divMsg.innerHTML = msg
        divMsg.classList.add('text-error')        // adiciona class a div
        input.insertAdjacentElement('afterend', divMsg)      // insere ao element adjacente, no parametro "afterend" depois do input, insere a "divMsg" que seria a mensagem de erro
    }
}

const form = new ValidaForm() // variavel atribuida a class