function contar(){
var ni = document.getElementById('ni').value
var nf = document.getElementById('nf').value
var stap = document.getElementById('stap').value
var res = document.getElementById('res')

if (ni.value.length == 0 || nf.value.length == 0 || stap.value.length == 0){
    window.alert('[ERRO] faltam dados!')
}

res.innerHTML = '<p> </p>'

while(ni<=nf){
    
    res.innerHTML += ' ' + ni
    ni += stap
}
}