const people = [ {name: "lucas"}, {name: "caio"}, {name: "bruna"} ]


// people.find(element,index,array)

const pessoa = people.find(person => {
    let isJoao = person.name === "lucas"
    return isJoao
})

console.log(pessoa)