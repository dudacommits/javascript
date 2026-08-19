function tabuada(){
    var n = document.getElementById('n').value
    var m = 0
    res = document.getElementById('res')
    while(m<=10){
        var r = n*m
        res.innerHTML += n + `x` + m + '=' + r + '<br>'
        m++
    }
}