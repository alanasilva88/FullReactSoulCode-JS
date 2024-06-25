/* 1. Faça a tabuada completa utilizando o loop for. */

for (let a = 1; a <= 10; a++) {        
    console.log(`Tabuada do ${a}`);    
    for (let z = 1; z <= 10; z++) {   
        console.log(`${a} X ${z} = ${a*z}`); 
    }
    console.log(''); 
}

//-----------------------------------------

/*  2. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo. A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55. */

let n1 = 0;
let n2 = 1;
let nz;

console.log(n1);
console.log(n2);

for (let f = 3; f <= 10; f++) {
    nz = n1 + n2; // soma dos dois anteriores
    console.log(nz);
    n1 = n2;
    n2 = nz;
}

//-----------------------------------------
/*  3. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente). */

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

//-----------------------------------------
/*  4. Faça um programa que calcule o fatorial de um número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.*/

let numero = 5;
let resultado = 1; 

for (let f = numero; f >= 1; f--) {
    resultado *= f;
}
console.log(`O fatorial de ${numero} é: ${resultado}`)

  
//-----------------------------------------
/*  5. Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7. */

for (let num = 7; num <= 100; num++) {
    if (num % 7 === 0) {
        console.log(`O número ${num} é divisível por 7.`)
    }
}

//-----------------------------------------

/*  6. Mostre a soma do 50 até o número 100 usando loop for.*/

let soma = 0;
for (let num2 = 50; num2 <= 100; num2++) {
    soma += num2
}

console.log(`A soma dos números de 50 a 100 é: ${soma}`)

//-----------------------------------------

/*  7. Mostre a seguinte figura com utilização de laços:
*
**
***
****
*****

*/

const altura = 5; 

for (let linha = 1; linha <= altura; linha++) { // quantidade de linhas
    let linhaAtual = '';
  
    for (let coluna = 1; coluna <= linha; coluna++) { // quantidade de colunas
        linhaAtual += '* ';
    }

    console.log(linhaAtual);
}

//-----------------------------------------
