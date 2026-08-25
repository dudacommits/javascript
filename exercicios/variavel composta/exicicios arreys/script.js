let botaoenviar = document.getElementById('enviar')
botaoenviar.addEventListener('click', registrar)
let bverregistros = document.getElementById('verregistros')
bverregistros.addEventListener('click', mostrarregistros)
let tab = document.getElementById('sel')

let usuarios = []

function registrar(){
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let cidade = document.getElementById('cidade').value
    usuarios.push({nome:nome, idade:idade,cidade:cidade})

    document.getElementById('nome').value = ''
    document.getElementById('idade').value = ''
    document.getElementById('cidade').value = ''
}

function mostrarregistros(){

    usuarios.forEach(usuario => {
        uservisor = document.createElement('option')
        uservisor.text = `${usuario.nome}, ${usuario.idade} anos, de ${usuario.cidade}`
        tab.appendChild(uservisor)
    });
    
}