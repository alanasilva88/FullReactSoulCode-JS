/*  1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
*/
let num = 2;

while (num <= 10) {
  console.log(num);
  num += 2;
}

//-----------------------------

/*
2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
*/

// Concatenação: 7 x 1 = 7...
let n2 = 1;
let n = 7;

while (n2 <= 10) {
    console.log(n + " X " + n2 + " = " + n2 * n);
    n2++;
}

// Outra opção:

let n3 = 1;

while (n3 <= 10) {
    console.log(`7 x ${n3} = ${n3 * 7}`);
    n3++;
}

//------------------------------

/*
3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.
*/

let impar = 1;
let soma = 0;

while (impar <= 999) { 
    if (impar % 2 !== 0) {
        soma += impar;
    }
    impar++;
}

console.log(soma);

//-------------------------------

/*
4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.
 */

let numero = 1;
let total = 0;

while (numero <= 1000) {
    if (numero % 9 === 0) {
        console.log(numero + " é divisível por 9."); // Adição da mensagem.
        total++;
    }
    numero++;
}

console.log("Total de números divisíveis por 9 são: " + total);
