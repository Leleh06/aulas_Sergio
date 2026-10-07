export class Pokemon{
    constructor(nome, categoria, ataque, altura, peso, especie){
        this.nome = nome;
        this.categoria = categoria;
        this.ataque = ataque;
        this.altura = altura;
        this.peso = peso;
        this.especie = especie;
    }

    lutar(texto){
        return texto
    }

    defender(nome){
        return nome + " está se defendendo"
    }

    crescer(){
        this.altura = Number((this.altura + 0.1).toFixed(2));
        return `${this.nome} cresceu! Nova altura: ${this.altura}m`;
    }

    falar(frase){
        return `${this.nome} diz: "${frase}"`;
    }
}