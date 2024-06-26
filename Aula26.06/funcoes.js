/*
    Funções

    function nome_da_funcao(parametros) {
        // bloco de código da função
    }

*/

//Declarando uma função chamada 'boas vindas'
function boasVindas() { // Escopo da função
    console.log("Seja bem-vindo(a)!")
    console.log("!!!!!!");
}

//------------------------------------

// Chamar a função
boasVindas();

function exemplo02() {
    let a = 5;
    let b = 10;

    console.log(`A soma é ${a + b}`);
}

exemplo02();

//-----------------------------------

// let num1 = 2;
// let num2 = 5;
// function exemplo03() {
//     console.log(`A soma é ${num1 + num2}`);
// }
// exemplo03();
// num1 = 10;
// num2 = 15;
// exemplo03();

//------------------------------------

// Parâmetros () = entrada = o que é necessário para executar

function soma(a, b) {
    console.log(`A soma de ${a} e ${b} é ${a + b}`);
}

soma(10, 8); // replicável e os valores são de a e b respectivamente
soma(9.5, 7);
soma(5, 6);

//---------------------------------------

// function media(n1, n2, n3) {
//     let resultado = (n1, n2, n3) / 3;
//     console.log(`A média é ${resultado}`);
// }

// media(7.0, 6.0, 9.0);
// media(8.0, 10.0, 6.0);
// media(4.0, 5.0, 7.0);


// Forma que deixa a função no escopo global e pode ser usado como variáveis

function media(n1, n2, n3) {
    let resultado = (n1, n2, n3) / 3;
    console.log(`A média é ${resultado}`);
    // Retorno = saída da função
    return resultado;
}

let mediaAluno1 = media(7.0, 6.0, 9.0);
let mediaAluno2 = media(8.0, 10.0, 6.0);
let mediaAluno3 = media(4.0, 5.0, 7.0);

console.log(mediaAluno1);
console.log(mediaAluno2);
console.log(mediaAluno3);

//-------------------------------------

function calcularImc(peso, altura) {
    return peso / (altura ** 2);
}

let imc1 = calcularImc(87, 1.78);
let imc2 = calcularImc(50, 1.9);

console.log(imc1);
console.log(imc2);