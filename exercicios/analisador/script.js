var numeros = []
var tab = document.getElementById('sel')

function adicionar(){   
    var n = Number(document.getElementById('number').value)
    
    if (n>100 || n<1){
        window.alert('valor invalido! digite um numero de 1 a 100.')
    } else {
        if (numeros.indexOf(n)== -1){
        numeros.push(n) 
        var item = document.createElement('option')
        item.text = `o numero ${n} foi adicionado!`
        tab.appendChild(item)
        }else {
            window.alert('numero ja escolhido!')
            }
    }
}
function finalizar(){
    var res = document.getElementById('res')
    numeros.sort()
    var soma = 0
    var c = 0
    while (c<numeros.length){
        soma = soma + numeros[c]
        c++
    }
    var media = soma/ (numeros.length)


    res.innerHTML = `<p>Ao todo foram adicionados ${numeros.length} numeros</p> <br>`
    res.innerHTML += `<p>O menor valor informado foi ${numeros[0]}</p> <br>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}</p> <br>`
    res.innerHTML += `<p>a media dos valores digitados e ${media}</p> <br>`

}