//Pergunta
//Usuario digita um numero
//Exibição de sucessor e antecessor

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Qual o número? ", function(numero){
	console.log(numero)
	console.log(+numero + 1)
	console.log(numero - 1)
	rl.close();
});