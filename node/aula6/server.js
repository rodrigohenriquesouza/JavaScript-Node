const express = require('express')
const app = express()

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET    PUT    delete

// http://meusite.com/ <- GET -> Entrega a página
// http://meusite.com/sobre <- GET -> Entrega a página/sobre
// http://meusite.com/contato <- GET -> Entrega a página/contato

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button
        </form>
        `)
})

app.post('/', (req, res) => {
    res.send('Recebi formulario')
})

app.get('/contato', (req, res) => {
    res.send('Você entrou em contatos!')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})