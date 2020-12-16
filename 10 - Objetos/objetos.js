class Gato {
    constructor(nome, idade, cor) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
	
	miar = () => {
		console.error(`${this.nome} diz: Miau!`)
	}
}

var bucky = new Gato("Bucky", 3, "laranja")
    var alaska = new Gato("Alaska", 2, "branca")
    var edinho = new Gato("Ed", 1, "preto")
    var neninha = new Gato("Jaiminha", 1, "preto e branco")
    var gatos = [bucky, alaska, edinho, neninha]
	
gatos.forEach(gato => {
    console.log(`${gato.nome} tem ${gato.idade} anos de idade e pelagem de cor ${gato.cor}`)
	gato.miar();
	gato.__proto__
	console.log(gato.__proto__)
});