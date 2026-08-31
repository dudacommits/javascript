
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
const vercarrinho = []
const head = document.getElementById('head')
const lista = document.getElementById('lista')
caixadebusca = document.getElementById('buscar')
caixadebusca.addEventListener('input', pesquisar)

function mostrar(a){
    a.forEach(produto => {
        head.style.display = 'flex'; 
        var addproduto = document.createElement('div')
        addproduto.classList.add('item')
        addproduto.innerHTML = `
        <p>${produto.nome}</p> <p>${produto.preco}</p> <p>${produto.quantidade}</p><input type="button" id="addcarrinho" value="+ ao carrinho">
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

function carrinho(){
    alert('ola')
}

