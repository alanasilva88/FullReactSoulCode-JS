/*  1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.  */
let nomes = ["Ana", "Alana", "Beatriz", "João"];
let presenca = ["Alana", "Beatriz"];

function criarpresenca(nomes, presenca) {
    let faltaram = [];
    
    for (let i = 0; i < nomes.length; i++) { // percorre a lista -- poderia ter usado o for (let nome of nomes)
        if (!presenca.includes(nomes[i])) { // verifica se não está na lista
            faltaram.push(nomes[i]); // adiciona a lista de faltantes caso não esteja na lista
        }
    }
    
    return faltaram;
}

console.log(`Os alunos: ${criarpresenca(nomes, presenca).join(", ")} faltaram na aula hoje.`); 



/*  2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado. */
let num = [1, 2, 3, 4, 5]
function elevarQuadrado (num, valor) {
    let resultado = [];

    for (let i = 0; i < num.length; i++) { // poderia ter usado o for (let n of num)
        resultado.push(num[i] * num[i]); // adiciona a lista resultado a potência dos elementos do array 
    }
    return resultado;
}

console.log(elevarQuadrado(num));



/*  3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.  */
let arquivos = ["documento.pdf", "imagem.jpg", "apresentacao.ppt", "relatorio.pdf"];
let extensao = "pdf";

function filtrarExtensao(arquivos, extensao) {
    let resultado = [];
    
    for (let i = 0; i < arquivos.length; i++) { // poderia ter usado o for(let arquivo of arquivos), pois percorre de forma mais rápida
        let arquivo = arquivos[i];

        if (arquivo.endsWith(extensao))  { // modifiquei de acordo com a correção, pois é mais simplificado o código
            resultado.push(arquivos[i]);
        }
        
        
    }
    
    return resultado;
}

console.log(`Os arquivos em .pdf do array são (${filtrarExtensao(arquivos, extensao)})`);



/*  4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.  */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Lista com o for-of:");
for (let numero of numeros) { // para cada numero dentro de numeros; faça alguma coisa.
    console.log(numero);
}

console.log("Lista com for comum:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}



/*  5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.   */
function filtrarStringsMaioresQueCinco(array) {
    let resultado = [];
    
    for (let f of array) { 
        if (f.length > 5) {
            resultado.push(f);
        }
    }
    
    return resultado;
}

let array = ["gato", "cachorro", "elefante", "pássaro", "peixe", "tigre"];

console.log("Strings com mais de 5 caracteres:" + filtrarStringsMaioresQueCinco(array));



/*  6. Crie um array com 7 números. Percorra e indique qual o maior número deles.   */
let numerosInteiros = [6, 7, 8, 75, 5, 4, 3];
let maiorNumero = numerosInteiros[0]; // começando com a ideia que o índice 0 é o maior número

for (let i = 1; i < numerosInteiros.length; i++) { // com o for se tem controle por onde percorre 
    
    if (numerosInteiros[i] > maiorNumero) { // Verifica se o elemento é o maior número
        maiorNumero = numerosInteiros[i]; // Atualizamos o maior número se encontrarmos um maior
    
    }
}

console.log("O maior número no array é:" + maiorNumero);



/*  7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos. */
function extrairVerificadores(cpf) {

    let digitosVerificadores = cpf.slice(-2); // Extrai os últimos dois dígitos

    return digitosVerificadores;
}
const cpf = "056.985.990-23";

console.log(`Os dois últimos nomes do CPF são: ${extrairVerificadores(cpf)}`)

// outra forma:

function extrairVerificadores2(cpf) {

    const partesCpf = cpf.split("-"); 

    return partesCpf[1];
}

console.log(extrairVerificadores2("056.985.990-23"));



/*  8. Crie uma função que inverte uma string. Retorna ela invertida. */
let string = "Bootcamp";

function inverterString (string) {
   
    return string.split("").reverse().join("");

}

console.log("Palavra invertida: " + inverterString(string));



/*  9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver. */

function repetir(palavra, vezes) { // para simplificar poderia ter usado o repeat

    let palavraRepetida = "";
  
    for (let i = 0; i < vezes; i++) {
      palavraRepetida += palavra;
    }
  
    return palavraRepetida;
}

let palavra = "batata";
let vezes = 3;

console.log(repetir(palavra, vezes));



/*  10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário. */
function compararStrings(str1, str2) {

    // if (str1 === str2) {
    //   return true;
    // } else {
    //   return false;
    // }

    return str1 === str2; // assim fica mais simplificado
}


let str1 = "javascript";
let str2 = "css";

console.log(compararStrings(str1, str2));
  


/*  11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'  */
function formatarData (dataArray, separador) {
    let [dia, mes, ano] = dataArray;

    return `${dia}${separador}${mes}${separador}${ano}`;
}

let dataArray = [20, 11, 2000];

let separador = ".";

console.log(formatarData(dataArray, separador));

// Poderia ser:

let data = ["20", "06", "2000"];
function exercicio11 (arr, sep) {
    return arr.join(sep);
}

console.log(exercicio11(data, "."));


/*  12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata' */
let alimentos = ["batata", "chuchu", "alface"];

function buscarPadrao (array, valor, padrao) {
   if (array.includes(valor)) {
    return valor;
   } else { // pode retirar o else
    return padrao;
   }
}


console.log(buscarPadrao(alimentos, 'batata', 'não tem batata')); // saída: batata
console.log(buscarPadrao(alimentos, 'alface', 'não tem alface')); // saída: alface
console.log(buscarPadrao(alimentos, 'tomate', 'não tem tomate')); // saída: não tem tomate

