var buttonenviar = document.getElementById('enviar')
buttonenviar.addEventListener('click', enviardados)
function enviardados(){
    let nome = document.getElementById('nome').value
    let sn = document.getElementById('sn').value
    let idade = document.getElementById('idade').value
    let peso = document.getElementById('peso').value
    let res = document.getElementById('res')
    let dados = { name: nome, sobrenome: sn, idade: idade, peso: peso}
    res.innerHTML = `<p>Nome completo: ${dados.name} ${dados.sobrenome}</p>
    <p>Idade: ${dados.idade} anos</p>
    <p>Peso: ${dados.peso} kg</p>`

}