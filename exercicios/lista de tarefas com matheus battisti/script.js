const lista = document.getElementById('listatarefas');
const botaoadd = document.getElementById('enviar');
const today = document.getElementById('today')
let c = 0

botaoadd.addEventListener('click', add);

function addtask(){
    const tasktitle = document.getElementById('txttarefa').value;
    
    if (tasktitle){
        const newtask = document.createElement('li');
        newtask.classList.add('caixatarefa');
        
        newtask.innerHTML = `
            <span class="txt">${tasktitle}</span> 
            <div class="icons">
                <span class="material-symbols-outlined confirm">check</span>
                        <span class="material-symbols-outlined delete">delete</span>
            </div>
        `;

        newtask.querySelector('.delete').addEventListener('click', () => {
            newtask.remove()
            console.log(`tarefa ${tasktitle} foi removida`)
            if (c>0){
                c--
            }
            
            atualizarContador()
        })
        
        newtask.querySelector('.confirm').addEventListener('click', () => {
            newtask.classList.toggle('done');
            if (newtask.classList.contains('done') && c>0) {
                c--;
            } else {
                c++;
            }
            atualizarContador()
            
        })

        lista.appendChild(newtask);
        document.getElementById('txttarefa').value = '';

        c++
        atualizarContador()
    } else {
        alert('Digite uma tarefa válida!');
    }
}

function add(e){
    e.preventDefault();
    addtask();
}

function atualizarContador(){
    if (c>0){
        today.innerHTML = `<h3>Tasks de hoje</h3><p>você tem <span class = "contador">${c}</span> tasks para completar hoje</p>`
    } else {
        today.innerHTML = `<h3>Tasks de hoje</h3><p>parabens voce completou todas as tasks de hoje!</p>`
    }
    
}
