import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa{
    constructor(nome,sobrenome,data_nasc,telefone,email,endereco,cpf,cargo,empresa,salario){

        super(nome,sobrenome,data_nasc,cpf,telefone, email, endereco)

        this.cargo = cargo;
        this.empresa = empresa;
        this.salario = salario;
    }

    getAtualizarSalario(salario){
        return `O salário do(a) ${super.getNomeCompleto()} foi reajustado para R$ ${Number(salario *= 1.10).toFixed(2)}`
    }
}