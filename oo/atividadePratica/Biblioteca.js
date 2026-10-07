export default class Livro {
    constructor(titulo, autor, ano, genero) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.genero = genero;
    }

    exibirInformacoes() {
        return `Título: ${this.titulo} \nAutor: ${this.autor} \nAno: ${this.ano} \nGênero: ${this.genero}`;
    }

    resumo() {
        return `O Livro ${this.titulo} com gênero de ${this.genero}, escrito por ${this.autor}`
    }


}

export class Aluno {
    constructor(nome, idade, curso) {
        this.nome = nome
        this.idade = idade
        this.curso = curso
    }

    exibirDados() {
        return `Nome: ${this.nome} \nIdade: ${this.idade} \nCurso: ${this.curso}`
    }
}



export class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    exibirProduto() {
        return `Produto: ${this.nome} \nPreço: R$ ${this.preco.toFixed(2).replace(".", ",")} \nCategoria: ${this.categoria}\n`;
    }

    aplicarDesconto(percentual){
        this.preco = this.preco - (this.preco * percentual / 100);
    }

}


