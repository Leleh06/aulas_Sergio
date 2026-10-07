export class Pessoa{
    constructor(nome,sobrenome,data_nasc,telefone,email,endereco,cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.data_nasc = data_nasc;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
        this.cpf = cpf;
    }

    getNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }

    getIdade(){
        hoje = new Date();
        return hoje.getFullYear() -= this.data_nasc
    }
}