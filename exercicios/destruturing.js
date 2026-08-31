let clientes = [{nome:'duda', idade:20, sexo:'feminino',},
                {nome:'bruna', idade:27, sexo:'feminino',},
                {nome:'caio', idade:23, sexo:'masculino',},
]


let {idade:idadeCliente, nome:nomeCliente, sexo:sexoCliente} = clientes[1]

console.log(nomeCliente)


let nomes = clientes.map(cliente => cliente.nome)

console.log(nomes)