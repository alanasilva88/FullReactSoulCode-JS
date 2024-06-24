// Questão 1 -  Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. A equação para realizar a conversão é: C = (F - 32) / 1.8

let fahrennheit = 90;
let celsius;
celsius = (fahrennheit - 32) / 1.8;

console.log(celsius);

// Questão 2 - Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.

let por = 10;
let mat = 8;
let his = 7;
let geo = 9;

let peso1 = 3;
let peso2 = 2;
let peso3 = 1;
let peso4 = 4;
let peso5 = 5;

let media = (por * 3 + mat * 2 + his * 1 + geo * 4) / ( peso1 + peso2 + peso3 + peso4 + peso5);

console.log(media);

