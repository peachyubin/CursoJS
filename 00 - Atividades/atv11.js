//Digitar n° inteiro
//Retornar se é impar, par, positivo ou neg

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual número? ", function (numero) {
		// Valida n° par ou ímpar 
        if (numero % 2 == 0) {
            console.log("Número par")
        } else {
            console.log("Número ímpar")
        }
		// Valida n° positivo ou negativo
        if (numero >= 0) {
            console.log("Número positivo")
        } else {
            console.log("Número negativo")
        }
        rl.close();
});