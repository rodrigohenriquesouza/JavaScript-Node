try {
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
}