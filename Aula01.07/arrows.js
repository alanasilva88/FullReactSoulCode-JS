// Declaração de function
function soma(a, b) {
    return a + b;
}

let resultadoSoma = soma(10, 5);


// Arrow function => +concisa
const somaArrow = (a, b) => a + b;

let resultadoArrow = somaArrow(5, 20);

// Arrow com corpo
const checarPar = (num) => {

    if (num % 2 == 0) {
        console.log(`O número ${num} é par.`);
        return true;
    } else {
        console.log(`O número é ${num} é ímpar.`);
        return false;
    }
}

// Transformando em arrow
const compararString = (srt1, srt2) => srt1 === srt2;
console.log(compararString("soulcode", "soulcode"));

const soma2 = (a, b) => a + b;
const testeFuncao = () => 2 * soma2(5, 9)

// Exemplo: Converter a função abaixo em arrow
function extrairDigitosVerificadores(cpf) {
    const partesCpf = cpf.split("-");
    return partesCpf[1];
}


const extrairDigitosVerificadores = (cpf) => {
    const partesCpf = cpf.split("-");
    return partesCpf[1];
}
// ou
const extrairDigitosArrow = (cpf) => cpf.split("-")[1];

// For Each -> executa uma função para cada elemento no array
const numeros = [1, 2, 3, 4, 5, 6, 7];

// Similar ao for-of
numeros.forEach((n) => {
    console.log(`O número é: ${n}`);
});
// para percorrer o índice
// Similar ao for-of
numeros.forEach((n, i) => {
    // n = elemento no array
    // i = índice do elemento
    console.log(`O elemento no índice ${i} é ${n}`);
});

// Exemplo: somar todos os números de um arry (forEach);
const num = [1, 2, 3, 4, 5, 6, 7];
let soma = 0;
num.forEach((numero) => {
    soma += numero;
});

console.log(soma);

// Quando a arrow tem um parâmetro não é necessário usar dois parênteses
// Se o corpo possui uma linha, pode ser simplificado dessa forma
num.forEach(numero => soma += numero);
console.log(soma);

// Exemplo: Converter a função em arrow e o for em forEach

const repetirPalavra = (palavra, qt) => {
    let resultado = "";
    // Nesse exemplo, a repetição não é baseada em array
    for (let i = 0; i < qt; i++) {
        resultado += palavra;
    }

    return resultado;
}


// Exemplo: Converter a função abaixo em arrow e o for em forEach
const filtrarStrings = (arr) => {
    let stringsFiltradas = [];

    arr.forEach((str) => {
        if (str.length > 5) {
            stringsFiltradas.push(str);
        }
    });


    return stringsFiltradas;
}

// Map = Cria um novo array com os resultados da função aplicada em cada elemento

const num2 = [3, 4, 9, 10];
// Cada elemento no array, será aplicado na função
//  O resultado será gerado em um novo array
const quadrados = num2.map((n) => n ** 2);
console.log(quadrados);

const nomes = ["ALana", "Daniel", "Cleidson", "Joaquim"];
const nomeMaiusculo = nomes.map((nome) => nome.toUpperCase());
console.log(nomeMaiusculo);
const nomesExclamacao = nomes.map((nomes) => nomes + "!");
console.log(nomesExclamacao);
// Pode colocar o índice como segundo prâmetro

// Exemplo: Use map para transformar os valores do array abaixo. Se o valor for par faz valor * 2, se for ímpar faz valor / 2

const valores = [1, 2, 3, 4, 5, 6, 7];

const novosValores = valores.map((valor) => {
    if (valor % 2 === 0) {
        return valor * 2;
    } else {
        (valor % 2 !== 0);
        return valor / 2;
    }
});

console.log(novosValores);



