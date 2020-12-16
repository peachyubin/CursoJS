//Deixar escolher 3 estados
//Três cidades dos estados
//Selecionar cidade
//Mostrar população, IDH, festa, curiosidade

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Selecione um estado: Santa Catarina (1), Paraná (2), Rio Grande do Sul (3) ", function (numero) {
    console.log(numero)
    var msg = ""
        switch (numero) {
        case "1":
            rl.question("Qual a cidade? Rio do Sul (1), Blumenau (2), Floripa (3) ", function (cidade) {
                console.log(cidade)
                switch (cidade) {
                case "1":
                    msg = "Rio do Sul é a terra do Motosul"
                        break;
                case "2":
                    msg = "Blumenau é a terra da Oktoberfest"
                        break;
                case "3":
                    msg = "Floripa é a terra do Planeta Atlântida"
                        break;
                }
				encerrar(msg);
            })
            break;
        case "2":
            rl.question("Qual a cidade? Curitiba (1), Paranaguá (2), Maringá (3) ", function (cidade) {
                console.log(cidade)
                switch (cidade) {
                case "1":
                    msg = "Curitiba é a terra dos ônibus mola"
                        break;
                case "2":
                    msg = "Paranaguá é a terra do Porto do Paraná"
                        break;
                case "3":
                    msg = "Maringá é a terra da urbanização recente"
                        break;
                }
                encerrar(msg);
            })
            break;
        case "3":
            rl.question("Qual a cidade? Gramado (1), Montenegro (2), Jaquirana (3) ", function (cidade) {
                console.log(cidade)
                switch (cidade) {
                case "1":
                    msg = "Gramado é a terra das ruas tortas"
                        break;
                case "2":
                    msg = "Montenegro é a terra do Negro"
                        break;
                case "3":
                    msg = "Jaquirana é a terra das toras"
                        break;
                }
                encerrar(msg);
            })
            break;
        }
});

function encerrar(msg) {
    console.log(msg)
    rl.close();
}
