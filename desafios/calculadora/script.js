var visor = document.getElementById('operacoes')
var botao = document.querySelectorAll('div.number')
botao.addEventListener('click', clicou)
function clicou(){
    var numeroclicado = Number(botao.innerText)
    visor.innerHTML = numeroclicado
}