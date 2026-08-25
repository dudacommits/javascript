let lista = [
    {nome:"carla",idade:17},
    {nome:"duda",idade:20},
    {nome:"bruna",idade:35}
]

lista.forEach((elemento,indice) => {
    console.log(`a ${elemento.nome} tem ${elemento.idade} anos e esta na posicao ${indice}`)
});