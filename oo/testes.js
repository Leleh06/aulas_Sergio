import { Pokemon } from "./Pokemon.js";

let p1 = new Pokemon("Pikachu", "elétrico", "extrema", 0.4, 6, "rato");
let p2 = new Pokemon ("Jigglypuff", "balão", "baixa", 0.5, 5.5, "fada");
let p3 = new Pokemon ("Bulbasaur", "semente", "forte", 0.7, 6.9, "planta venenosa");
let p4 = new Pokemon ("");

console.log(p2.nome, p2.categoria);
console.log(`${p1.nome} ${p1.lutar("está lutando")}`);

console.log(p1.crescer());              
console.log(p3.crescer());              
console.log(p1.falar("Pika pika!"));    
console.log(p2.falar("Jiggly... jiggly..."));