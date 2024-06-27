/*  1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal. */

// Primeira função: IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Segunda função: Status do IMC
function statusIMC(imc) {
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25.0 && imc <= 29.9) {
        console.log("Sobrepeso");
    } else if (imc >= 30.0 && imc <= 34.9) {
        console.log("Obesidade grau I");
    } else if (imc >= 35.0 && imc <= 39.9) {
        console.log("Obesidade grau II");
    } else if (imc >= 40.0) {
        console.log("Obesidade grau III");
    }
}

// Exemplo 
let peso = 68; // kg
let altura = 1.63; // metros

let imc = calcularIMC(peso, altura);
console.log("IMC: " + imc.toFixed(2));
statusIMC(imc);

//----------------------------------------------

/*  2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%   */

function percentual(numero) {
    if (numero >= 0 && numero <= 1) {
        let porcentagem = numero * 100 + "%";
        return porcentagem;
    } else {
        return "O número deve estar entre 0 e 1";
    }
}

let numero = 0.456;

console.log(percentual(numero));

//----------------------------------------------

/*  3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true  */

function negativo(numero) {
    return numero < 0;
}

let valor1 = -2;
let valor2 = 5;
let valor3 = -10;

console.log(negativo(valor1));  //  true
console.log(negativo(valor2));  //  false
console.log(negativo(valor3));  //  true


//-------- CORREÇÃO (+ 1 OPÇÃO) ---------------------

function ehnegativo(num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}

console.log(ehnegativo(-2));
console.log(ehnegativo(3));

//----------------------------------------------

/*  4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno. */ 

function contar(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

let num = 5;
let num2 = 1000;

contar(num);
console.log("------------");    
contar(num2);  
  
//----------------------------------------------

/*  5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado. */

function nomeSobrenome(nome, sobrenome) {
    return nome + ' ' + sobrenome;
}

let nome = "Alana";
let sobrenome = "Silva";

console.log(`Seu nome completo é ${nomeSobrenome(nome, sobrenome)}`);

//----------------------------------------------

/*  6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14. */

function calcularAreaCirculo(raio1) {
    const pi = 3.14;
    return (pi * raio1 * raio1);
}

let raio1 = 30;

console.log(`Este círculo possui área de: ` + calcularAreaCirculo(raio1) + `m².`);

//----------------------------------------------


/*  7. Crie uma função que recebe a área de um circulo e mostra o nível:
    Entre 1 e 20 => Nível I
    Entre 21 e 40 => Nível II
    Qualquer outro diâmetro => Nível inválido
*/

function calcularAreaCirculo(r) {
    const pi = 3.14;
    let area = pi * r ** 2;
    
    if (area >= 1 && area <= 20) {
        console.log("Este círculo possui NÍVEL I.");

    } else if (area >= 21 && area <= 40) {
        console.log("Este círculo possui NÍVEL II.");

    } else {
        console.log("Este círculo possui NÍVEL INVÁLIDO!");

    }

    return area; 
}

let raio = 2; 

console.log(`Este círculo possui área de: ` + calcularAreaCirculo(raio) + `m².`);

//----------------------------------------------

/*  8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.  */

function converterString (string) {
    return string.toLowerCase();
}

let string = "SOULCODE";

console.log(converterString (string)); 

//----------------------------------------------

/*  9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string. */

function contarCaractere(string, caracter) {
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

// Exemplo
let minhaString = "Olá, mundo!";
let caractereBuscado = 'm';
let nOcorrencias = contarCaractere(minhaString, caractereBuscado);

console.log(`O caractere '${caractereBuscado}' ocorre ${nOcorrencias} vezes na string '${minhaString}'.`);
