// keydown

document.addEventListener('keydown', tecle)

function tecle (event){
    if (event.key === 'Enter'){
        console.log("apertou enter")
    }
    
}

// keyup

document.addEventListener('keyup', e)

function e (event){
    if (event.key === 'Enter'){
        console.log("soltou enter")
    }
    
}