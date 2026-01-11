/* try {
    // Executa quando não há erros
    
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')

    try {
         console.log(b)
    } catch (e) {
        console.log('ERRO try dentro de try')
    } finally {
        console.log('Também sou finally: ERRO')
    }
} catch (e) {
    // Executa quando há erros
    console.log('Tratando o erro')
} finally {
    // Executa sempre
    console.log('FINALLY: Eu sempre sou executado')
} */

 function returnHour(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = returnHour()
    console.log(hora)
} catch (e) {
    // Tratar erro
    console.log(e)
} finally {
    console.log('Tenha uma boa tarde.')
}