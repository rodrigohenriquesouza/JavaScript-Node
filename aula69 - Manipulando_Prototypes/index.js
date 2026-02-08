// new Object -> Object.prototype

const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

const objC = {
    chave: 'C'
}

Object.setPrototypeOf(objB, objA)   // Hierarquia de prototypes
Object.setPrototypeOf(objC, objB)

console.log(objC.chaveB)
console.log(objC.chaveA)

