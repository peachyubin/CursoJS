// Atv 01

// Nome (Amanda), idade (25), cidade (Curitiba) 
// Olá Amanda, você tem 25 anos de idade e mora em Curitiba

const readline = require("readline");
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Qual o seu nome?", function(nome) {
	r1.question("Qual a sua idade?", function(idade) {
		r1.question("Em que cidade você mora?", function(cidade) {
			// Intro
			//var nome = "Lucas"
			//var idade = 17
			//var cidade = "RJ"
			console.log(nome);
			console.log(idade);
			console.log(cidade);

			// Concatenação de palavras (strings)
			var ola = "Olá " + nome + " " 
			var vc = "você tem " + idade + " anos de idade" + " "
			var local = "e mora em " + cidade
			console.log(ola + vc + local)
			r1.close();
		});
	});
});


