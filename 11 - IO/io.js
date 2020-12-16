// I/O = Input/Output
// FS = File system

const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Escreva uma mensagem para o futuro: ", function(msg){
	fs.writeFileSync("mensagem.txt", msg)
	rl.close();
});