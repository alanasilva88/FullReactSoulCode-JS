// 1. Crie uma função arrow que recebe dois números e retorna o maior deles.
const maiorNum = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

console.log("O maior número é: " + maiorNum(5, 10));


// 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.

let palavras = ["batata", "chuchu", "cenoura"];

palavras.forEach((letra) => {
    console.log(letra.charAt(0).toUpperCase() + letra.slice(1));

});


//  3. Use map para transformar um array de números, multiplicando cada número por 5.

const num = [8, 70, 90, 25];

const multiplicando = num.map((n) => n * 5);
console.log(multiplicando);


// 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.

let idade = [18, 35, 25, 15, 13];
let idade18 = idade.filter((idade) => idade >= 18);
console.log(idade18);


// 5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.

let livro = {
    titulo: "Café com Deus Pai",
    autor: "Junior Rostirola",
    publicacao: {
        editora: "Editora Vélos",
        ano: "2023",
        edicao: "1ª edição",
        paginas: "424 páginas"
    }
};

console.log(livro.publicacao.editora);


// 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.

const [primeiraFruta, segundaFruta] = ["banana", "laranja", "uva", "kiwi"];

console.log(primeiraFruta);
console.log(segundaFruta);


// 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.

//  Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

const deixarPar = (arr) => arr.filter(num2 => num2 % 2 === 0);
let num2 = [8, 9, 56, 7, 6, 22];
console.log(`Os números pares do array são:  ${deixarPar(num2)}.`);


//  Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.

const somar = (arr) => {
    let soma = 0;
    arr.forEach(num => {
        soma += num;
    });

    return soma;
}

let num3 = [7, 11, 12];
console.log(somar(num3));


// Exercício 3: Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo. 

const verificaPalindromo = (str) => {
    let strInvertida = str.split('').reverse().join('');
    return str.toLowerCase() == strInvertida.toLowerCase();
}

console.log(verificaPalindromo("Arara"));


//  Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando. 

const contagemVogais = (palavra) => {
    const vogais = ["a", "e", "i", "o", "u"];

    const palavralower = palavra.toLowerCase();

    const vogaisPalavra = palavra.split("").filter(letra => vogais.includes(letra));

    return vogaisPalavra.length;
}

console.log(contagemVogais("batata"));


//  Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.

const encontrarMenorNumero = (array) => {

    let menorNumero = array[0];

    array.forEach(num => {
        if (num < menorNumero) {
            menorNumero = num;

        }
    });


    return menorNumero;
};


let numerosInteiros = [6, 7, 8, 75, 5, 4, 3];
let menorNumero = encontrarMenorNumero(numerosInteiros)
console.log("O menor número no array é:" + menorNumero);


//  Exercício 6: Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3

const calcularMedia = (arr) => {
    let soma = 0;
    arr.forEach(num => {
        soma += num;
    });
    return soma / arr.length;
}

let num4 = [7.0, 8.0, 9.0];
console.log(calcularMedia(num4));


//  Exercício 7: Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.

const contarFrequenciaCaracteres = (string) => {
    let frequencias = {};

    string.split("").forEach(caractere => {
        if (frequencias[caractere]++) {
        } else {
            frequencias[caractere] = 1;
        }
    });

    return frequencias;
};

const texto = "Batata frita";
console.log(contarFrequenciaCaracteres(texto)); 


