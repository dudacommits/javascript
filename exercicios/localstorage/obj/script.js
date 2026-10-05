const person = {
    name: "duda",
    age: 20,
    job: "programer"
}

localStorage.setItem("person", JSON.stringify(person))

const getperson = localStorage.getItem("person")

const personObeject = JSON.parse(getperson)

console.log(personObeject.name)