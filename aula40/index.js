function viewHour() {
    let data = new Date()
    
    return data.toLocaleTimeString('pt-BR', {
        hours12: false
    })
}

const timer = setInterval(function () {
    console.log(viewHour())
}, 1000)

setTimeout(function () {
    clearInterval(timer)
}, 3000)

setTimeout(function () {
    console.log('Olá Mundo!')
}, 5000)