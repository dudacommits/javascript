// callback sincrona

// function exibir(num) {
//     console.log(`o resultado e ${num}`)
// }

// function soma (a,b, callback){
//     var result = a + b ;
//     callback (result)
// }

// soma( 2, 2, exibir)

// // setTimeout assincrona

// console.log('antes do setTimeout')

// setTimeout(function () {
    
//     console.log('testando o setTimeout')
    
// }, 3000);

// console.log('depois do setTimeout')

// // setInterval assincrona

// setInterval(function () {
//    console.log('testando setInterval') 
// }, 2000);

// clearTimeout na pratica

var x = 0

var myTime = setTimeout(function(){
    console.log('o x e igual a 0')
}, 1500);

x=5

if (x > 0){
    clearTimeout(myTime)
    console.log('o x passou de 0!')
}

// clearInterval na pratica

var myInterval = setInterval(function(){
    console.log('imprimindo interval')
}, 500);

setTimeout(function(){
    console.log('nao preciasmos mais repetir')
    clearInterval(myInterval)
}, 2000);





