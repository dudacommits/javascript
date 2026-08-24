var main = document.querySelector('main')

function addtask(){
    var task = document.getElementById('task').value
    var newtask = document.createElement('div')
    newtask.classList.add('task')
    newtask.innerHTML = `<p>${task}</p> <div id="buttons"><input type="button" value="EDITAR" id="editar" class="buttontask"> <input type="button" value="DELETAR" id="deletar" class="buttontask"></div></div>`
    main.appendChild(newtask)

    var botaodeletar = newtask.querySelector('#deletar')
    botaodeletar.addEventListener('click', deletartask)


}

 
function deletartask(){
        this.parentElement.parentElement.remove()
    }