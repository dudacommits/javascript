var main = document.querySelector('main')
var c = 0
var txtc = document.getElementById('contador')
var txt = document.getElementById('texto')

function addtask(){
    c ++
    txt.innerHTML = `<p id="texto">voce tem <span id="contador">${c}</span> tasks para concluir hoje</p>`
    var task = document.getElementById('task').value
    var newtask = document.createElement('div')
    newtask.classList.add('task')
    newtask.innerHTML = `<p><input type="checkbox" name="check" id="check"> ${task}</p> <div id="buttons"><input type="button" value="DELETAR" id="deletar" class="buttontask"></div></div>`
    main.appendChild(newtask)
    txtc.innerHTML = c


    var checked = newtask.querySelector('#check')
    checked.addEventListener('click', concluido)

    var botaodeletar = newtask.querySelector('#deletar')
    botaodeletar.addEventListener('click', deletartask)

    var botaoeditar = newtask.querySelector('#editar')
    botaoeditar.addEventListener('click', editartask)

}

function concluido(){
    c --
    txt.innerHTML = `<p id="texto">voce tem <span id="contador">${c}</span> tasks para concluir hoje</p>`
    if(c==0){
     txt.innerHTML = 'Parabens! voce concluiu todas as tasks de hoje!'  
    } 
    this.parentElement.parentElement.style.backgroundColor = '#1b1b25'
}

 function deletartask(){
    var confirmar = window.confirm('tem certeza que quer excluir essa tarefa?')
    if (confirmar == true){
        this.parentElement.parentElement.remove()
    }
        
    }
