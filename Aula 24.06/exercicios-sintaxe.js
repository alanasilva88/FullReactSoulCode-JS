/* Questão 1 -  Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. A equação para realizar a conversão é: C = (F - 32) / 1.8 */

let fahrenheit = 90;
let celsius;
celsius = (fahrenheit - 32) / 1.8;


// Correçao aplicada: Adição do texto "A temperatura em Celsius é " "°C"
console.log("A temperatura em Celsius é " + celsius.toFixed(2) + "°C");

/* Questão 2 - Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5. */

let por = 10;
let mat = 8;
let his = 7;
let geo = 9;
let inf = 8;

let peso1 = 3;
let peso2 = 2;
let peso3 = 1;
let peso4 = 4;
let peso5 = 5;

let media = (por * 3 + mat * 2 + his * 1 + geo * 4 + inf * 5) / ( peso1 + peso2 + peso3 + peso4 + peso5);


// Correçao aplicada: Adição do texto "Sua média ponderada é: " 
console.log("Sua média ponderada é: " + media.toFixed(1));

