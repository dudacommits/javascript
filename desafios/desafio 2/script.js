function verificar(){
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 14){
                img.setAttribute('src', 'imagens/meninocrianca.avif')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/jovemhomem.jpg')
            } else{
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 14){
                img.setAttribute('src', 'imagens/meninacrianca.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/jovemmulher.jpg')
            } else{
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>detectamos ${genero} de ${idade} anos</p>`
        res.appendChild(img)
        
    }
    
}