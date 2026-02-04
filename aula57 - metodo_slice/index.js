const nomes = ['Rodrigo', 'Natalia', 'Mauricio', 'Julia', 'Datan', 'Matheus']

// nomes.splice(indice, quantos elementos deletar, elem1, elem2, elem3)

console.log(nomes)

const nomesRemovidos = nomes.splice(-5, Number.MAX_VALUE)
console.log(nomesRemovidos)