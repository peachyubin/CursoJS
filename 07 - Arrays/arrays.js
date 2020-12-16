
var frutas = ["moranguinho", "uva", "acabaxi"]
//console.log(frutas[2])
//console.log(frutas[1])
//console.log(frutas[0])
//frutas.push("banana")
var index = frutas.indexOf("uva")
console.log(frutas)
delete frutas[index]
console.log(frutas)

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}