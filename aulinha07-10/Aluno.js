import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa {
    constructor(nome, sobrenome, data_nasc, cpf, endereco, matricula, curso, frequencia, empresa){

        super(nome,sobrenome,data_nasc,cpf,endereco);

        this.matricula = matricula;
        this.curso = curso;
        this.frequencia = frequencia;
        this.empresa = empresa;

    }

    getEstudar(){
        return `${this.nome} está estudando Javascript`;
    }

    getInfo(){
        return `O aluno(a) ${super.getNomeCompleto()}, está matriculado no curso: ${this.curso}`
    }
}