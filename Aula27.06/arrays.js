// Array => armazenar múltiplos valores/ ítens / elementos
// [] => vazio
// [1, 2, 3, 4, 5] => preenchido
// ["batata", "cenoura", "chuchu"] => com strings
// Cria arrays definindo índices
// const numeros = new Array(3); // cria um array com 3 elementos vazios

let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
console.log(figuras); // visualizar dentro do array

let numeros = [1, 3, 5, 7.3, 9.5];
console.log(numeros);

//  Acessando um elemento
console.log(figuras[1]);
console.log(figuras[5]);
console.log(numeros[4]);
console.log(numeros[100]); // undefined

// Alterar os elementos
let notas = [6.5, 8.0, 9.0];
console.log("Antes: " + notas);
notas[1] = 8.5;
notas[2] += 0.8;
notas[0] ++; // +1
console.log("Depois: " + notas);

// Tamanho (length)
let arr1 = [];
let arr2 = [1, 2, 3, 4];

console.log(arr1.length);
console.log(arr2.length);

// Percorrer array
for (let i = 0; i < arr2.length; i++) {
    console.log(i);
}

// Quando o array não tiver nenhum elemento quando ele percorrer não gera nenhuma informação
let alunos = ["Alana", "Daniel", "Cleidson"];
for (let i = 0; i < alunos.length; i++) {
    console.log(`O aluno ${i} é ${alunos[i]}`);
}

// For-of - percorrer o array exibindo os elementos e "f" assume cada um dos valores por vez, sem exibir o índice
let frutas = ["abacaxi", "laranja", "manga", "abacate"];

for(let f of frutas) {
    console.log(f);
}

for(let i in frutas) { // Percorre os índices
    console.log([i]);
}

