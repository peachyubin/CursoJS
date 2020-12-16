const validator = require("cpf-cnpj-validator")
    var cpf_verdadeiro = "08713424998"
    var cpf_falso = "12175394900"

    console.log(validator.cpf.isValid(cpf_verdadeiro))
    console.log(validator.cpf.isValid(cpf_falso))
    console.log(validator.cpf.format(cpf_verdadeiro))
    console.log(validator.cpf.format(cpf_falso))
