// Cliente informa o valor + 10% de desconto

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Receber o valor do produto
// Calcular o desconto
// Apresentar o valor do prod descontado

rl.question("Qual o valor? ", function(valor){
	console.log(valor)
	var valor_do_desconto = (valor * 10)/100
	console.log(valor - valor_do_desconto)
	rl.close();
});