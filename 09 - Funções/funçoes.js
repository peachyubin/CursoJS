var pessoa = {
	nome: "Edinho",
	idade: 5,
	cumprimentar: function(){
		return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`
	}
}
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.cumprimentar)
console.log(pessoa.cumprimentar())


function cumprimentarGenerico(nome, idade){
	var msg = `Generico: Olá, meu nome é ${nome} e eu tenho ${idade} anos`
	return msg
}
var cumprientarMaria = cumprimentarGenerico("Maria", 17)
console.log(cumprientarMaria)

function procedurecumprimentargenerico(nome, idade){
	console.log(`Generico: Olá, meu nome é ${nome} e eu tenho ${idade} anos`)
}
var cumprimentarJoao = procedurecumprimentargenerico("João", 12)
console.log(cumprimentarJoao)