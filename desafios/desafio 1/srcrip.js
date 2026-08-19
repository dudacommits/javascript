

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var hora = new Date().getHours()
    var hora = 16

    msg.innerHTML = `agora sao ${hora} horas.`

    if (hora>=0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e28759'
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b0c8d2'
    } else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#132c42'
    }
}