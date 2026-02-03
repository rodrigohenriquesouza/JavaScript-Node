// Funções recursivas

function contarNum(num) {
    console.log(num)
    if (num >= 15) return
    num++
    contarNum(num)
}

contarNum(-5)