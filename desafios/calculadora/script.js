let visor = document.getElementById('numesc')
let ope = document.getElementById('op')
let botoes = document.querySelectorAll('.button')
const n = []

botoes.forEach(botao => {
    botao.addEventListener('click', clicou)
});
function clicou (event){
    
    let btnclicado = event.target.innerText

    if (+btnclicado >= 0 || btnclicado === "."){
        visor.innerHTML += btnclicado
        
    } else if (btnclicado === "C"  || btnclicado === "CE") {
        visor.innerHTML = ""
    } else if (btnclicado === "%"){
        n.push(Number(visor.innerHTML))
        console.log(n)
        visor.innerHTML += btnclicado
        console.log("op:" + btnclicado)
    }
    
}
    