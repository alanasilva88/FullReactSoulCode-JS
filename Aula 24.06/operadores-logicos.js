/*  Operadores lógicos -> boolean
    && -> E (AND)
    || -> OU (OR)
    ! -> NÃO (NOT)
*/

// console.log(true);
// console.log(false);

// AND (&&)
// console.log(true && true);
// console.log(true && false);
// console.log(true && true && true && false);

// // OR (||)
// console.log(true || true);
// console.log(true || false);
// console.log(true || false || false || false);
// console.log(false || false);

// // NOT (!)
// console.log(!true);
// console.log(!false);

// Ordem: ! > && > ||
// console.log(!true || false);
// console.log(true || true && false);
// console.log(!false && true || false);

// let idade = 80;
// // idade entre 18 e 59 anos
// console.log(idade >= 18 && idade <= 59);

let media = 10.0;
let sabeIngles = true;

let aprovado = media >= 7.0;

console.log("Aprovado? " + aprovado);

let contratado = aprovado && sabeIngles;
console.log("Contratado? " + contratado);

