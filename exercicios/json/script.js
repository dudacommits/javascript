const objs = [
    {
        nome: 'duda',
        idade: 20,
        esta_trabalhando: true,
        detalhes_profissao: {
        profissao: 'programador',
        empresa: 'empresa x'
        },
        hobbies: ['programar', 'correr', 'jogar']
    },
    {
        nome: 'bruna',
        idade: 19,
        esta_trabalhando: false,
        detalhes_profissao: {
        profissao: null,
        empresa: null
        },
        hobbies: ['ler', 'academia']
    }
]

// CONVERTER OBJETO PARAR TEXTO JSON

const jsonData = JSON.stringify(objs)

console.log(jsonData)

// CONVERTER JSON PARAR OBJETO

const objData = JSON.parse(jsonData)

console.log(objData)

// USAR OBJ

objData.map( pessoa=> {
 console.log(pessoa.nome)
})