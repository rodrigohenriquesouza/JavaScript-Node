const numeros = [1, 2, 3, 4, 5, 6, 7 , 8, 9]

for (let i in numeros) {
    let num = numeros[i]

    if (num === 2) {
        console.log('Pulei o número 2')
        continue
    }

    console.log(num)

    if (num === 7) {
        console.log('7 - ENCONTRADO, LEAVE')
        break
    }
}
    