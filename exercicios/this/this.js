let pessoa = {
    nome:'duda',
    falar:function(){
        console.log(`ola meu nome e ${this.nome}`)
    }
}

let conversar = pessoa.falar
conversar.call(pessoa)

let carro = {
    nome:'porshe 911 gt',
    numero:400,
    mostrar:function(){
        console.log(`${this.nome} numero: ${this.numero}`)
    }
}

let moto = {
    nome:'honda gtx',
    numero:100
}

carro.mostrar()
carro.mostrar.call(moto)