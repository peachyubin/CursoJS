// Informar valor
// Valor do veiculo sem impostos
// Até 12k - 5% distribuidor - Isento de imposto
// De 12k a 25k - 10% dist - 15% imp
// Acima de 25k - 15% dist - 20% imp
// Percentual do distribuidor
// Quanto foi arrecadado de imposto
// Quanto foi repassado ao distribuidor

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Qual o valor do veículo? ", function(valor){
	console.log(valor)
	var imposto = 0
	var dist = 0
	if(valor <= 12000){
		imposto = 0
		dist = valor * 5 / 100
	}
	else if(valor >= 12000 && valor <= 25000){
		imposto = valor * 15 / 100
		dist = valor * 10 / 100
	}
	else{
		imposto = valor * 20 / 100
		dist = valor * 15 / 100
	}
	var msg = `O valor do veículo sem impostos é ${valor - imposto}`
	var msg2 = `O valor arrecadado em impostos é de ${imposto}`
	var msg3 = `O valor repassado ao distribuidor é de ${dist}`
	console.log(msg)
	console.log(msg2)
	console.log(msg3)
		rl.close();
});