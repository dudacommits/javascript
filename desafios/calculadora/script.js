let visor = document.getElementById('numesc')
let ope = document.getElementById('op')
let botoes = document.querySelectorAll('.button')
let n = []
let sinais = []
let result = 0

botoes.forEach(botao => {
    botao.addEventListener('click', clicou)
});
function clicou (event){
    
    let btnclicado = event.target.innerText

    if (+btnclicado >= 0 || btnclicado === "."){
        visor.innerHTML += btnclicado
        
    } else if (btnclicado === "C") {
        visor.innerHTML = " "
        
    } else if (btnclicado === "CE"){
        visor.innerHTML = " "
        ope.innerHTML = " "
        n = []
        sinais = []
        console.log(n)
        console.log(sinais)
    }
    
    else if (btnclicado === "%"){
        n.push(Number(visor.innerHTML))
        sinais.push(btnclicado)
        console.log(n)
        console.log(sinais)
        ope.innerHTML += visor.innerHTML + " " + btnclicado
        visor.innerHTML = ""

    } else if (btnclicado === "÷"){
        n.push(Number(visor.innerHTML))
        sinais.push(btnclicado)
        console.log(n)
        ope.innerHTML += visor.innerHTML + " " + btnclicado
        visor.innerHTML = ""

    }  else if (btnclicado === "x"){
        n.push(Number(visor.innerHTML))
        sinais.push(btnclicado)
        console.log(n)
        ope.innerHTML += visor.innerHTML + " " + btnclicado
        visor.innerHTML = ""

    }  else if (btnclicado === "-"){
        n.push(Number(visor.innerHTML))
        sinais.push(btnclicado)
        console.log(n)
        ope.innerHTML += visor.innerHTML + " " + btnclicado
        visor.innerHTML = ""

    }  else if (btnclicado === "+"){
        n.push(Number(visor.innerHTML))
        sinais.push(btnclicado)
        console.log(n)
        ope.innerHTML += visor.innerHTML + " " + btnclicado
        visor.innerHTML = ""

    } 
     else {
        n.push(Number(visor.innerHTML))
        ope.innerHTML += visor.innerHTML + " " + btnclicado
        calcular()
        visor.innerHTML = result

    }
}

function calcular(){

    result = n[0]

     for (let c = 0; c < sinais.length; c++) {
       if (sinais[c] === "+") {
            result = result + n[c + 1]
        }
        else if (sinais[c] === "-") {
            result -= n[c + 1]
        }

        else if (sinais[c] === "x") {
            result *= n[c + 1]
        }

        else if (sinais[c] === "÷") {
            result /= n[c + 1]
        }

        else if (sinais[c] === "%") {
            result %= n[c + 1]
        }
    }

    console.log(result)
}
