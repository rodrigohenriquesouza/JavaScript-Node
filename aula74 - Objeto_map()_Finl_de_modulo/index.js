const pessoas = [
    {id: 3, nome: 'Maria'},
    {id: 2, nome: 'Helena'},
    {id: 1, nome: 'Luiz'}
]

/* const novasPessoas = {}
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas[id] = { ...pessoa }
}

console.log(novasPessoas) */

const novasPessoas = new Map()

for (const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas.set(id, { ...pessoas })
}

console.log(novasPessoas)