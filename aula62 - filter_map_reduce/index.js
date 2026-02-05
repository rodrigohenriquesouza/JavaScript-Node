// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numsPar = numeros.filter(num => num % 2 == 0).map(num => num * 2).reduce((acumulador, num) => acumulador + num)


console.log(numsPar)



// [ 50, 80, 2, 8, 22 ]
// [ 100, 160, 4, 16, 44 ]