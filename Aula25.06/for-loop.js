/*  For - Para - sequências
    for (inicialização; condição; atualização) {
        // Código que será repetido 
    } 
*/

// De 0 a 10
for (let cont = 0; cont <= 10; cont++) {
    console.log(cont);
}

// De 0 a 100, pulando de 5 em 5
for (let cont = 0; cont <= 100; cont+= 5) {
    console.log(cont);
}

// De 1000 a 0
for (let cont = 1000; cont >= 0; cont--) {
    console.log(cont);
}

// Adaptar os exercícios

/*  1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
*/

for (let C = 2; C <= 10; C += 2) {
    console.log(C);
}

/*
2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
*/

let n = 7
for (let C = 1; C <= 10; C++) {
    console.log(`${n} X ${C} = ${n*C}`)
}

/* 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.
*/
let soma = 0;

for (let c = 1; c <= 999; c++) {
    if (c % 2 !== 0) {
        soma = soma + c;
    }
}
// Interpolação / Template string
console.log(`Soma dos números ímpares é igual a: ${soma}`);

/*
4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.
*/

let qt = 0;
for (let c = 1; c <= 1000; c++) {
    if(c % 9 === 0) {
        console.log(`${c}  é divisível por 9.`);
        qt++;
    }
}

console.log(`Total: ${qt}`);