import { Aluno } from "./Aluno.js";
import { Funcionario } from "./Funcionario.js";

let aluno1 = new Aluno("Leticya", "Dias", "542.456.208.62", "16/08/2006", "Travessa dos lambaris", "42517683242", "Informática", "90%", "ENGIE");

let aluno2 = new Aluno("Heloisa", "Piancó", "318.724.906.15", "03/04/2005", "Rua das Hortênsias", "42517684107", "Administração", "95%", "WEG");

let aluno3 = new Aluno("Camila", "Vasconcelos", "729.083.415.40", "27/11/2006", "Avenida dos Pinheiros", "42517685318", "Desenvolvimento de Sistemas", "88%", "Embraco");

let aluno4 = new Aluno("Davi", "Cavalcanti", "156.390.827.74", "12/01/2007", "Rua Bem-te-vi", "42517686529", "Eletrotécnica", "92%", "Tractebel");

console.log(aluno1.nome, aluno1.empresa);
console.log(aluno2.getNomeCompleto());
console.log(aluno3.getEstudar());


let funcionario1 = new Funcionario("Marcos", "Teixeira", "14/09/1998", "(48) 99872-3415", "marcos.teixeira@engie.com.br", "Rua das Gaivotas, 250", "487.213.690.35", "Analista de Sistemas", "ENGIE", 5200)

console.log(funcionario1.getAtualizarSalario(funcionario1.salario));
