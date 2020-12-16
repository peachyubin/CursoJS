
try{
	console.log(10 / 0)
} 
catch{
	console.log("Erro ao acessar variável não definida")
}

try{
	//throw 'myException'
}
catch{
	console.log("Lancei um erro")
}
finally{
	console.log("Executando o finally")
}