var produtos = [
    {id: 1, nome: 'Teclado', preco: 120, temDesconto: true, quantidade: 5},
    {id: 2, nome: 'Mouse', preco: 80, temDesconto: false, quantidade: 10},
    {id: 3, nome: 'Monitor', preco: 900, temDesconto: true, quantidade: 3},
    {id: 4, nome: 'Headset', preco: 250, temDesconto: false, quantidade: 7},
    {id: 5, nome: 'Webcam', preco: 180, temDesconto: true, quantidade: 4},
    {id: 6, nome: 'Notebook', preco: 3500, temDesconto: false, quantidade: 2},
    {id: 7, nome: 'Mousepad', preco: 60, temDesconto: true, quantidade: 15},
    {id: 8, nome: 'Microfone', preco: 450, temDesconto: false, quantidade: 6},
    {id: 9, nome: 'Caixa de Som', preco: 300, temDesconto: true, quantidade: 8},
    {id: 10, nome: 'Cadeira Gamer', preco: 1200, temDesconto: false, quantidade: 4}
]

novosprodutos = produtos.map(produto => {
    if (produto.temDesconto == true){
        var novopreco = produto.preco * 0.9
    } else {novopreco = produto.preco}

    return{id:produto.id,nome:produto.nome,preco:novopreco,quantidade:produto.quantidade}
})

novosprodutos.forEach(produto => {
//   console.log(`${produto.nome} valor: R$ ${produto.preco.toFixed(2)}`);
});

let totalvendas = produtos.reduce((acumulador,produto)=>{
    return acumulador + (produto.preco * produto.quantidade)
}, 0)
// console.log(`valor venda total: R$${totalvendas.toFixed(2)}`)

let promocao = produtos.filter(produto => produto.temDesconto)
// console.log(promocao)

let naopromocao = produtos.filter(produto => !produto.temDesconto)
// console.log(naopromocao)

let faturamentototal = produtos
.map((produto) => {
    return {...produto, quantidade:(produto.quantidade + 10)}
})
.filter(produto => produto.temDesconto)
.reduce((acumulador,produto) => acumulador + (produto.quantidade * produto.preco),0,)

console.log(faturamentototal)
