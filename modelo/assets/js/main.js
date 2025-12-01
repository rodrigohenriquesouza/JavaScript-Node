const form = document.querySelector('#form')

form.addEventListener('submit', function (event) {
    event.preventDefault() 
        console.log('Evento previnido')
        setResultado('Olá Mundo!')
    
}) 

function setResultado(msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = msg
}