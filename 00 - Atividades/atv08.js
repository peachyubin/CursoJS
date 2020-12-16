//Calculo de IMC
//IMC = peso / altura ^2

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Qual o seu peso? ", function(peso){
	rl.question("Qual a sua altura? ", function(altura){
		console.log(peso)
		console.log(altura)
		var divisor = +altura * +altura
		var IMC = peso / divisor
	console.log(IMC)
	rl.close();
	})
});