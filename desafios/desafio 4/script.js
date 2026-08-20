function tabuada(){
    var n = Number(document.getElementById('n').value)
    var m = 1
    tab = document.getElementById('seltab')
    tab.innerText = ''
    while(m<=10){
        var r = n*m
        var item = document.createElement('option')
        item.text = ` ${n} x ${m} = ${r}`
        tab.appendChild(item)
        m++
    }
}