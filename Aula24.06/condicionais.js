/*  Estruturas condicionais (If - Else)
    if (condição lógica) {
        instruções caso for true (Bloco)
    } else {
        caso contrário segue essas instruções (Bloco)
    }

*/

// let idade = 15;

// if (idade > 18) {
//     console.log("Você é maior que 18 anos!");

// } else {
//     console.log("Você ainda não tem idade maior que 18 anos!");

// }

// console.log("Fim!");

// // ----------------------------

// let media = 5.0;
// let sabeIngles = true;
// let aprovado = media >= 7.0;

// if (aprovado) {
//     console.log("Parabéns! Você foi aprovado!");
// } else {
//     console.log("Que pena! Continue tentando!");
// }

// if (aprovado && sabeIngles) {
//     console.log("Parabéns! Você foi contratado!");
// } else {
//     console.log("Que pena! Você não foi contratado!");
// }

// Positivo, negativo ou zero
// let numero = -9;

// if (numero > 0) {
//     console.log("O número é positivo.")
// } else if (numero < 0){
//     console.log("O número "+ numero + " é negativo!")
// } else {
//     console.log("O número é zero!")
// }

// console.log("FIM!");

//----------------------------------

// è par (divisível por 2) ou ímpar (não for divisível por 2)

// let n = 7;

// if (n % 2 === 0) {
//     console.log("O número é par!");

// } else {
//     console.log("O número é ímpar!");
// }

// console.log("FIM!");

//-----------------------------------

// 1 - Domingo, 2 - Segunda, 3 - Terça..., 7 - Sábado

let dia = 4;

if (dia === 1) {
    console.log("Hoje é domingo!");
} else if (dia === 2) {
    console.log("Hoje é segunda!");
} else if (dia === 3) {
    console.log("Hoje é terça!");
} else if (dia === 4) {
    console.log("Hoje é quarta!");
} else if (dia === 5) {
    console.log("Hoje é quinta!");
} else if (dia === 6) {
    console.log("Hoje é sexta!");
} else if (dia === 7) {
    console.log("Hoje é sábado!");   
} else {
    console.log("Não existe esse dia da semana!");
}

console.log("FIM!");


