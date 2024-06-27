let nums = [];
console.log(nums);

// Adiciona elemento ao final do array
nums.push(4);
nums.push(5);
nums.push(10);
nums.push(16);
console.log(nums);
nums.push(19);
console.log(nums);

// Remove o último elemento do array
nums.pop();
console.log(nums);

// Inserir no imício do array
let notas = [6.5, 7.5, 8];
console.log(notas);
notas.unshift(9);
notas.unshift(9.5);
notas.unshift(7);
console.log(notas);

// Remover no início
notas.shift();
console.log(notas);

// Juntar o array e montar um string com um separador específico
let endereçoIP = [192, 168, 1, 1];
console.log(endereçoIP.join("."));

let data = ["23", "11", "2024"];
let dataString = data.join("/");
console.log(dataString);

// Concatenar arrays
let p1 = ["Mouse", "Monitor", "Microfone"];
let p2 = ["Webcam", "Teclado"];

let p3 = p1.concat(p2); // Novo array com os dois combinados
console.log(p3);

// Array reverso 
let n = [1, 2, 3];
let nInvertido = n.reverse();
console.log(nInvertido);

// Includes = verifica se o valor está ou não no array
let pessoas = ["João", "Maria", "João"];
if(pessoas.includes("José")) {
    console.log("José está presente!");
} else {
    console.log("José não está presente!");
}

// Split = transforma string em array, onde cada palavra se torna um índice 
let frase = "Eu vou estudar React";
let dataInicio = "26/06/2024";
let palavraEspecial = "BATATA";

let fraseArray = frase.split(" "); // elemento separador inicial
console.log(fraseArray);

let dataInicioArray = dataInicio.split("/");
console.log(dataInicioArray);

// Inverter a string
console.log(palavraEspecial.split("").reverse().join(""));

// indexOf = retornar o índice de um elemento
let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];

console.log(figuras.indexOf("ok"));
console.log(figuras.indexOf("estrela"));
console.log(figuras.indexOf("batata")); // -1 -> quando não encontra o elemento no array

// Slice = recorta o array selecionando índice e formando um novo array com esses elementos

let fig1 = figuras.slice(1, 3); // colocar o índice posterior ao que se quer ou o último elemento 
console.log(fig1);

let fig2 = figuras.slice(3, 6); // se não colocasse o 6, poderia deixar apenas o 3, pois o array acaba alí 
console.log(fig2);

console.log(figuras.slice(-1)); // pega o último elemento
console.log(figuras.slice(figuras[-1]));

