//Média
const readline = require("readline");
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("informe sua média: ", function(media){
	// 10 é excelente
	// 9 é ótimo
	// 8 é muito bom
	// 7 é bom 
	// 6 é aprovado
	// 5 é em exame
	// < 5 é reprovado

	if(media == 10){
		console.log("excelente");
	}else if(media < 10 && media >= 9){
		console.log("ótimo");
	}else if(media < 9 && media >= 8){
		console.log("muito bom");
	}else if(media < 8 && media >= 7){
		console.log("bom");
	}else if(media < 7 && media >= 6){
		console.log("aprovado");
	}else if(media < 6 && media >= 5){
		console.log("em exame");
	}else {
		console.log("reprovado");
	}
	
	r1.close();
});