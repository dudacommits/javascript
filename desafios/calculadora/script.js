let visor = document.getElementById('operacoes')
let numeros = document.querySelectorAll('.number')

numeros.forEach(numero => {
    numero.addEventListener('click', clicou)
});
function clicou(event){
    let numeroclicado = event.target.innerText
    visor.innerHTML += numeroclicado
}
    


    let operadores = document.querySelectorAll('.op')
    operadores.forEach(operador => {
        operador.addEventListener('click', operacao)
    });

    function operacao(event){
    let sinal = event.target.innerText
    visor.innerHTML += sinal
}