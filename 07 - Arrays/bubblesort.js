//Ler um array
//Rodar o array
//Rodar no prox elemento
//Comparar os elementos
//Pn = primeiro numero; Sn = segundo numero

var numeros = [100, 101, 500, 250, 5, 0.2]
var length = numeros.length
for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - i -1; j++) {
			var pn = numeros[j]
			var sn = numeros[j+1]
			if(pn > sn){
				var temp = pn
				numeros[j] = sn
				numeros[j+1] = temp
			}
		}
}
console.log(numeros)