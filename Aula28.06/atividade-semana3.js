//  Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

// Pensei que a função deveria percorrer o array para verificar os números (se) esse número for PAR ele vai para uma nova array que antes eu defini e deixei vazia (let numeros = []) e o push adiciona os elementos na nova array.
function deixarPar(arr) {
    let numeros = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            numeros.push(num);
        }
    }
    return numeros;
}


let num = [8, 9, 56, 7, 6, 22];
console.log(`Os números pares do array são:  ${deixarPar(num)}.`);

//  Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.


// Meu pensamento foi basicamente percorrer o array, onde utilizei o for in, tentei com o normal e tbm deu certo, pois eles percorrem o índice que era necessário ao meu ver, já que iria somar os índices no final. Mas para simplificar o código coloquei o for in mesmo. E iniciei a contagem do 0, porque daí foi somando os outros elementos a partir desse 0, sem isso deu erro, pois usei essa variável no for e return.
function somar(arr) {
    let soma = 0;
    for (let i in arr) {
        soma += arr[i];
    }

    return soma;
}

let num2 = [7, 11, 12];
console.log(somar(num2));

//  Exercício 3: Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.

function verificaPalindromo(str) { // Aqui a ideia é pegar a palavra retirar qualquer símbolo ou espaço e deixar toda em minúscula (poderia ser em maiúscula tbm) para não confundir na comparação, tipo não identificar o caracter maiúsculo do minúsculo e tals e depois comparar se essa a palavra é igual a ela separando seus elementos, invertendo e juntado no final.
    
    str = str.toLowerCase().replace(/\s/g, '');

    return str === str.split('').reverse().join('');
}

console.log(verificaPalindromo("ARARA")); 
console.log(verificaPalindromo("Ana")); 


//  Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.


function verificarVogal(str) {

    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]; // Nesta questão pensei em criar uma array com as possíveis vogais como foi dito na questão

    let numVogais = 0; // Como é uma contagem, iniciei do zero para ir adicionando

    let caracteres = str.split(""); // Utilizei esse método para separar os elementos da string para poder verificar se existe vogal. Achei necessário ter essa separação e formar outra array

    for (let v of caracteres) { // Percorre a lista (array) feito pelo split para depois verificar se tem vogal de acordo com a variável "vogais" achei o método inludes ideal para ver se existe vogal no array
        if (vogais.includes(v)) {
            numVogais++; // Vai somando as vogais

        }
    }

    return numVogais; // Retorna o total da soma ou no caso o fim da contagem de vogais

}

let str = "casa";

console.log(verificarVogal(str));


//  Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.

function encontrarMenorNumero(array) { // A idéia é percorrer o array e verificar quem é o menor número, neste caso iniciei a comparação pelo índice (0) e a partir daí vai verificando quem é o menor

    let menorNumero = array[0]; // começando com a ideia que o índice 0 é o menor número

    for (let i = 1; i < array.length; i++) { // com o (for) para percorrer pelos índices
        
        if (array[i] < menorNumero) { // Verifica se o elemento é o menor número
            menorNumero = array[i]; // Atualiza o menor número se encontrar um outro número que seja menor
        
        }
    }
    return menorNumero;
}


let numerosInteiros = [6, 7, 8, 75, 5, 4, 3]; 
let menorNumero = encontrarMenorNumero(numerosInteiros)
console.log("O menor número no array é:" + menorNumero);


//  Exercício 6: Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3

function calcularMedia(arr) { // Minha ideia é percorrer o array, somar os lementos e dividir pela quantidade de elementos. Neste caso utilizei for of e determinei uma variável inicial soma = 0 como em outras questões.
    let soma = 0;

    for (let num of arr) {
        soma += num; 
    }
    return soma / arr.length;
}

let num3 =  [7.0, 8.0, 9.0];
console.log(calcularMedia(num3));


//  Exercício 7: Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.

function contarFrequenciaCaracteres(string) { // A ideia foi fazer percorrer o parâmetro string e verificar a frenquência dos caracteres e guardar em um objeto chamado frenquência com propriedade caractere. Quem tiver o mesmo caractere vai somando quantas vezes aparecer e quem não, gera uma nova propriedade mostrando que apareceu 1 vez apenas.
    let frequencias = {};
  
    for (let caractere of string) {
      if (caractere in frequencias) {
        frequencias[caractere]++;
      } else {
        frequencias[caractere] = 1;
      }
    }
  
    return frequencias;
}
  
const texto = "Batata frita";  
console.log(contarFrequenciaCaracteres(texto)); 
  

//  Exercício 8: Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.

// Acredito que tenha outras maneiras que se adequam melhor, porém pensei no momento em utilizar o replace para remover e substituir o que foi pedido na questão, precisando de três parâmetros que é o email, a parte que quero remover e a sua substituição. 
function ofuscarParteEmail(email, parteRemover, substituicao) {
    return email.replace(parteRemover, substituicao);
}

const email = "jose.almir@dev.com";
const palavraRemover = "ose.almir";
console.log(ofuscarParteEmail(email, palavraRemover, "*********"));  



