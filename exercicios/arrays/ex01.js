var produtos = [
    {id: 1, nome: 'Teclado', preco: 120, temDesconto: true, quantidade: 5},
    {id: 2, nome: 'Mouse', preco: 80, temDesconto: false, quantidade: 10},
    {id: 3, nome: 'Monitor', preco: 900, temDesconto: true, quantidade: 3},
    {id: 4, nome: 'Headset', preco: 250, temDesconto: false, quantidade: 7},
    {id: 5, nome: 'Webcam', preco: 180, temDesconto: true, quantidade: 0},
    {id: 6, nome: 'Notebook', preco: 3500, temDesconto: false, quantidade: 2},
    {id: 7, nome: 'Mousepad', preco: 60, temDesconto: true, quantidade: 15},
    {id: 8, nome: 'Microfone', preco: 450, temDesconto: false, quantidade: 6},
    {id: 9, nome: 'Caixa de Som', preco: 300, temDesconto: true, quantidade: 8},
    {id: 10, nome: 'Cadeira Gamer', preco: 1200, temDesconto: false, quantidade: 4}
]

// produtos.forEach(produto => {
    
//     console.log(`${produto.nome} R$${produto.preco} Q:${produto.quantidade}`)
//     if (produto.quantidade <= 4 && produto.quantidade > 0){
//         console.log('ESTOQUE BAIXO')
//     } else if (produto.quantidade == 0){
//         console.log('SEM ESTOQUE')
//     } else {
//         console.log('ESTOQUE DISPONIVEL')
//     }
//     console.log('____________________')
// });

const buscarproduto = produtos.find(produto => produto.nome === 'Mouse')
if (buscarproduto){
console.log(`PRODUTO ENCONTRADO`)
console.log(`${buscarproduto.nome} R$${buscarproduto.preco}`)
} else {
    console.log(`PRODUTO NAO ENCONTRADO`)
}

const valorestoque = produtos.reduce((acumulador,produto) => {
    const total = acumulador + produto.quantidade * produto.preco
    return total
},0)

const totalreal = new Intl.NumberFormat('pt-BR' , {style: 'currency', currency: 'BRL'}).format(valorestoque);

console.log(`TOTAL: ${totalreal}`)


const caro = produtos.reduce( (acumulador,atual) => {
    if (atual.preco>acumulador.preco){
        return atual
    } else {
        return acumulador
    }
})

console.log(`o produto mais caro e ${caro.nome}`)

const desconto = produtos.filter(produto => produto.temDesconto)

desconto.forEach( produto => console.log(produto.nome));