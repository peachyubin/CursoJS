// Receber o valor das 4 notas
// Calcular a media
// Apresentar o resultado
// 7,0 a 10 é aprovado
// 5,0 a 6,9 é em exame
// 0 a 4,9 é reprovado

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Qual a primeira nota? ", function(nota1){
	rl.question("Qual a segunda nota? ", function(nota2){
		rl.question("Qual a terceira nota? ", function(nota3){
			rl.question("Qual a quarta nota? ", function(nota4){
				var soma = (+nota1 + +nota2 + +nota3 + +nota4)
				var media = soma / 4
				console.log(soma)
				if(media >= 7.0 && media <= 10){
				console.log("Aprovado");
				}else if(media >= 5.0 && media <= 6.9){
				console.log("Em exame");
				}else {
				console.log("Reprovado");
				}
				console.log(media)
				rl.close();
			});
		});
	});
});
