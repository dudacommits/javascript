const lista = document.getElementById('listatarefas');
const botaoadd = document.getElementById('enviar');

botaoadd.addEventListener('click', add); // Corrigido: Fechado o parêntese corretamente

function addtask(){
    const tasktitle = document.getElementById('txttarefa').value;
    
    if (tasktitle){
        const newtask = document.createElement('li');
        newtask.classList.add('caixatarefa');
        
        // Corrigido: Crase fechada após a tag </div>
        newtask.innerHTML = `
            <span>${tasktitle}</span> 
            <div class="icons"> 
                <i class="fa-solid fa-check confirm"></i> 
                <i class="fa-solid fa-xmark delete" ></i> 
            </div>
        `;


        
        lista.appendChild(newtask);
        document.getElementById('txttarefa').value = '';
    } else {
        alert('Digite uma tarefa válida!');
    }
}

function add(e){
    e.preventDefault();
    addtask();
}
