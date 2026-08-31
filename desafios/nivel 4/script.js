
var produtos = [
    {id: 1, nome: 'Teclado', preco: 120, temDesconto: true, quantidade: 5},
    {id: 2, nome: 'Mouse', preco: 80, temDesconto: false, quantidade: 10},
    {id: 3, nome: 'Monitor', preco: 900, temDesconto: true, quantidade: 3},
    {id: 4, nome: 'Headset', preco: 250, temDesconto: false, quantidade: 7},
    {id: 5, nome: 'Gabinete Gamer', preco: 350, temDesconto: true, quantidade: 4},
    {id: 6, nome: 'Memória RAM 16GB', preco: 420, temDesconto: false, quantidade: 8},
    {id: 7, nome: 'SSD 1TB M.2', preco: 480, temDesconto: true, quantidade: 0},
    {id: 8, nome: 'Placa de Vídeo', preco: 2100, temDesconto: false, quantidade: 2},
    {id: 9, nome: 'Cadeira Gamer', preco: 1100, temDesconto: true, quantidade: 3},
    {id: 10, nome: 'Webcam Full HD', preco: 190, temDesconto: false, quantidade: 12}
]
const carrinho = []
const listacarrinho = document.getElementById('carrinhocompras')
const head = document.getElementById('head')
const lista = document.getElementById('lista')
caixadebusca = document.getElementById('buscar')
caixadebusca.addEventListener('input', pesquisar)

listacarrinho.style.display = 'none'

function mostrar(a){
    a.forEach(produto => {
        head.style.display = 'flex'; 
        var addproduto = document.createElement('div')
        addproduto.classList.add('item')
        addproduto.innerHTML = `
        <p>${produto.nome}</p> <p>${produto.preco}</p> <p>${produto.quantidade}</p> <input type="button" id="addcarrinho" value="+ ao carrinho" onclick="adicionaraocarrinho(${produto.id})">
        `
        lista.appendChild(addproduto)
});
}

function renderizar(){
    lista.innerHTML = ''
    mostrar(produtos)
}

function desconto(){
    lista.innerHTML = ''
    const comdesconto = produtos.filter(produto => produto.temDesconto)

    mostrar(comdesconto)
}

function semestoque(){
    lista.innerHTML = ''
    const noestoque = produtos.filter( produto => produto.quantidade == 0)

    mostrar(noestoque)
}

function estoquebaixo(){
    lista.innerHTML = ''
    const baixoestoque = produtos.filter( produto => produto.quantidade <= 4 && produto.quantidade > 0)

    mostrar(baixoestoque)
}

function pesquisar(){
    lista.innerHTML = ''
    txt = caixadebusca.value
    if (txt === '') return; else{
        const pesquisarproduto = produtos.filter( produto => produto.nome.toLowerCase().includes(txt.toLowerCase()))

    mostrar(pesquisarproduto)
        
    }
}

function vercarrinho(){
    lista.innerHTML = ''
    head.style.display = 'none'
    listacarrinho.style.display = 'grid'
    listacarrinho.innerHTML = `
        <h3>Produtos</h3>
        <h3>Preço</h3>
        <h3>Quantidade</h3>
        <h3>Subtotal</h3>
    `;
   
    carrinho.forEach(produto => {
        
        const itemnome = document.createElement('p')
        itemnome.innerHTML = `${produto.nome}`
        listacarrinho.appendChild(itemnome)

        const itempreco = document.createElement('p')
        itempreco.innerHTML = `${produto.preco}`
        listacarrinho.appendChild(itempreco)

        const itemquantidade = document.createElement('p')
        itemquantidade.innerHTML = `<input type="number" name="qnt" id="qnt" value="1">`
        listacarrinho.appendChild(itemquantidade)

        const quantidadedeitens = document.getElementById('qnt').value
        
        const calculosubtotal = produto.preco * quantidadedeitens

        const subtotal = document.createElement('p')
        subtotal.innerHTML = `R$ ${calculosubtotal} `
        listacarrinho.appendChild(subtotal)

        
    },0)
    });

    const calculototal = carrinho.reduce((acumulador, atual) => {
        const calculo = acumulador + (atual.preco * quantidadedeitens)
        return calculo

    const total = document.createElement('p')
        total.innerHTML = `R$ ${calculototal} `
        listacarrinho.appendChild(total)

}

function adicionaraocarrinho(id){
    const produtoencontrado = produtos.find(produto => produto.id === id )
    carrinho.push(produtoencontrado)
}
