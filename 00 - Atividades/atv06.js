//Perguntar qual o quarto
//Dar as opçoes
//Perguntar quantos dias
//Falar quanto deve pagar apto 45 dia duplo 65 luxo 110

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Qual o tipo de quarto? Apto simples (1), Apto duplo (2) e Suíte luxo (3) ", function(numero){
	console.log(numero)
		rl.question("Quanto tempo de estadia? ", function(tempo){
			console.log(tempo)
			console.log(typeof(numero))
				switch (numero){
					case "1":
				console.log(45 * tempo)
						break;
					case "2":
						console.log(65 * tempo)
						break;
					case "3":
						console.log(110 * tempo)
						break;
				}
				rl.close();
		})
});