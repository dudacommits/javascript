// evento de mouseover

var title = document.getElementById('title')

title.addEventListener("mouseover", function(){

    this.style.backgroundColor = "yellow";
})

// evento mouseout

title.addEventListener("mouseout", function(){
    this.style.backgroundColor = "white";
})

// afetar outro elemento com eventos

title.addEventListener("mouseover", function(){
    var p = document.querySelector('#p')
    p.classList.remove('hide')
})

title.addEventListener("mouseout", function(){
    var p = document.querySelector('#p')
    p.classList.add('hide')
})


