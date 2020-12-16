// Nome idade sexo cargo
// 3 pessoas
class Pessoa {
    constructor(nome, idade, sexo, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cargo = cargo;
    }
}

const rs = require("readline-sync");
const fs = require("fs");
var pessoas = []
// cadastro de pessoas
while (true) {
    var nome = rs.question("Qual o seu nome? ");
    console.log(nome)
    var sexo = rs.keyInSelect(["Feminino", "Masculino"], "Qual o seu sexo? ");
    console.log(sexo)
    var idade = rs.question("Qual a sua idade? ");
    console.log(idade)
    var cargo = rs.keyInSelect(["Gerente", "Atendente", "Açougueiro", "Secretário", "Almoxarife", "Padeiro", "Estagiário"], "Qual o seu cargo? ");
    console.log(cargo)
    var pessoa = new Pessoa(nome, idade, sexo, cargo);
    pessoas.push(pessoa);
    var maior = rs.keyInSelect(["Sim"], "Deseja continuar? ");
    console.log(maior)
    if (maior == -1) {
        console.log(pessoas)
        break;
    }
}
// estatísticas
// Quantas fem e masc
// Quantos de cada um dos cargos: gerente, atendente, açougueiro, secretária, almoxarife, padeiro e estagiário
// Quantas +18 e -18
var totalDePessoas = pessoas.length
var totalMasc = 0
var totalFem = 0
var totalMaior = 0
var totalMenor = 0
var totalGerente = 0
var totalAtendente = 0
var totalAcougueiro = 0
var totalSecretaria = 0
var totalAlmoxarife = 0
var totalPadeiro = 0
var totalEstagiario = 0
for (let i = 0; i < totalDePessoas; i++) {
    const p = pessoas[i];
    // estatisticas de sexo
    if (p.sexo == 0) {
        totalFem++
    }
    else {
        totalMasc++
    }
    // estatisticas de idade
    if (p.idade >= 18) {
        totalMaior++
    }
    else {
        totalMenor++
    }
    // estatisticas de cargo
    switch (p.cargo) {
        case 0:
            totalGerente++
            break;
        case 1:
            totalAtendente++
            break;
        case 2:
            totalAcougueiro++
            break;
        case 3:
            totalSecretaria++
            break;
        case 4:
            totalAlmoxarife++
            break;
        case 5:
            totalPadeiro++
            break;
        case 6:
            totalEstagiario++
            break;
    }
}
var msg = `${totalMasc / totalDePessoas * 100}% dos funcionários são do sexo masculino
${totalFem / totalDePessoas * 100}% dos funcionários são do sexo feminino
${totalMaior} dos funcionários são maiores de idade
${totalMenor} dos funcionários são menores de idade
De ${totalDePessoas}, ${totalGerente} são Gerentes
De ${totalDePessoas}, ${totalAtendente} são Atendentes
De ${totalDePessoas}, ${totalAcougueiro} são Açougueiros
De ${totalDePessoas}, ${totalSecretaria} são Secretários
De ${totalDePessoas}, ${totalAlmoxarife} são Almoxarifes
De ${totalDePessoas}, ${totalPadeiro} são Padeiros
De ${totalDePessoas}, ${totalEstagiario} são Estagiários`
console.log(msg)
fs.writeFileSync("relatorio.txt", msg)