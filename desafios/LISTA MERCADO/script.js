const produtos = []
add = document.getElementById('add')
add.addEventListener('click', adicionaritem)

function adicionaritem(){
    let item = document.getElementById('item').value
    let preco = document.getElementById('preco').value
    let quantidade = document.getElementById('quantidade').value

    produtos.push({item:item, preco:preco, estoque:quantidade})

    let novoitem = document.createElement('div')
    novoitem.classList.add('produto')
    novoitem.innerHTML = `<p class="nit"> ${item}</p> <p class="val">valor:${preco}</p> <p class="est">estoque:${quantidade}</p>`;

    document.querySelector('section').appendChild(novoitem);
}