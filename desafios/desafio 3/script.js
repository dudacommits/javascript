function contar(){
    var ni = document.getElementById('ni')
    var nf = document.getElementById('nf')
    var stap = document.getElementById('stap')
    var res = document.getElementById('res')

    if (ni.value.length == 0 || nf.value.length == 0 || stap.value.length == 0){
        window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = '<p>Contando:</p>'
        var i = Number(ni.value)
        var f = Number(nf.value)
        var p = Number(stap.value)
        if (i<f){ 
            while(i <= f){  
            res.innerHTML += '  ' + i + ' \u{1F407} '
            i += p
        } } else{
            while (i > f){
                res.innerHTML += '  ' + i + ' \u{1F407} '
            i -= p
            }
           }
        
    }
    res.innerHTML += ' ' + i + '\u{1F3C1}'
}