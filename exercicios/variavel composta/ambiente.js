let num = ['A' , 'B', 'C']
num[3] = 'D'
num.push('E')
console.log(`nosso vetor e [${num}] e tem ${num.length} elemetos`)
console.log(`o primeiro vetor e ${num[0]}`)
console.log(`e o ultimo vetor e ${num[4]}`)

/*
for(var c=0;c<num.length ;c++){
    console.log(num[c])
}
*/


for (let c in num){
    console.log(num[c])
}
console.log(`onde esta a letra C? esta na posicao: ${num.indexOf('C')}`)