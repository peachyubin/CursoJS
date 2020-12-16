//Pedir 3 infos
//Nome, salário, número de faltas
//Até 1045 é isento
//Entre 1045 até 1999,99 - 5% sobre salario bruto
//Entre 2000 ate 3499,99 - 8% "" ""
//Entre 3500 e 5999,99 - 11% "" ""
//6000 ou + - 14% "" ""
//Vale transporte 6% "" ""
//0 faltas, + 100; 1 a 5, -50;Acima de 5, -150

//sl = salário líquido ; vt = vale transporte

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual o seu nome? ", function (nome) {
    rl.question("Quanto é seu salário? ", function (salario) {
        rl.question("Quantas faltas você tem? ", function (faltas) {
			salario = +salario
			var inss = 0
			var vt = salario * 6 / 100
			var bonus = 0
            if (salario <= 1045) {
                console.log("Sem desconto")
            } else if (salario >= 1045 && salario <= 1999.99) {
                inss = salario * 5 / 100
                console.log("Desconto de 5% do salário")
            } else if (salario >= 2000 && salario <= 3499.99) {
                inss = salario * 8 / 100
                console.log("Desconto de 8% do salário")
            } else if (salario >= 3500 && salario <= 5999.99) {
                inss = salario * 11 / 100
                console.log("Desconto de 11% do salário")
            } else {
                inss = salario * 14 / 100
                console.log("Desconto de 14% do salário")
            } 
			console.log(nome)
			console.log(`O desconto de Vale Transporte é: ${vt}`)
			console.log(`O desconto de INSS é: ${inss}`)
			if (faltas == 0){
				bonus = +100
			} else if (faltas >=1 && faltas <= 5){
				bonus = -50
			} else if (faltas > 5){
				bonus = -150
			}
			var sl = salario - inss - vt + bonus
			console.log(sl)
			rl.close();
        })
    })
})
