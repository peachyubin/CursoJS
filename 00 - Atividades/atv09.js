//Ler 3 valores e colocar em ordem crescente

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Qual o primeiro número? ", function(n1){
	rl.question("Qual o segundo número? ", function(n2){
		rl.question("Qual o terceiro número? ", function(n3){
			var numeros = [n1, n2, n3]
			numeros.sort((a, b) => a - b)
			console.log(numeros)
			rl.close();
		});
	});
});