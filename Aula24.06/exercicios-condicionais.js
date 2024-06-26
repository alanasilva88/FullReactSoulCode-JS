/*  1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação
*/

let n1 = 9;
let n2 = 8;
let n3 = 7.5;

let media = (n1 + n2 + n3) / 3;

if (media >= 7.0) {
    console.log("Parabéns, você foi aprovado!")
} else if (media >= 5 && media < 7.0) {
    console.log("Você precisa de um reforço!")
} else {
    console.log("Que pena! Você foi reprovado!")
}

console.log("Fim!");

//----------------------------

/*  2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC.
 
Peso em Kg e Altura em M
Abaixo de 18,5 -> Abaixo do peso	
Entre 18,5 e 24,9 -> Peso normal	
Entre 25,0 e 29,9 -> Sobrepeso	
Entre 30,0 e 34,9 -> Obesidade grau I
Entre 35,0 e 39,9 -> Obesidade grau II	
Acima de 40,0 -> Obesidade grau III
*/

let peso = 60;
let altura = 1.63;
let IMC = peso / (altura * altura);

// Acréscimo do console
console.log("Seu IMC é igual a "+ IMC);

if (IMC < 18.5) {
    console.log("Abaixo do peso");
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log("Peso normal");
} else if (IMC >= 25.0 && IMC <= 29.9) {
    console.log("Sobrepeso");
} else if (IMC >= 30.0 && IMC <= 34.9) {
    console.log("Obesidade grau I");
} else if (IMC >= 35.0 && IMC <= 39.9) {
    console.log("Obesidade grau II");
} else if (IMC >= 40.0) {
    console.log("Obesidade grau III");
}

console.log("Fim!");

//---------------------------------------

/*  3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais!
*/

let a = 10;
let b = 20;

if (a > b) {
    console.log("a é maior que b");
} else if (a < b) {
    console.log("a é menor que b");
} else {
    console.log("a e b são iguais");
}

console.log("Fim!");

//------------------------------------------

/*4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário. */

let salario = 1500;
let quantidadeDependentes = 1;

if (quantidadeDependentes === 0) {
    console.log("Sem ajuste salarial.");
} else if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    salario = salario * 1.30;  
    console.log("Com ajuste de 30% do salário. Receberá: R$ " + salario);
} else if (quantidadeDependentes > 5) {
    salario = salario * 1.40;  
    console.log("Com ajuste de 40% do salário. Receberá: R$ " + salario);
}

console.log("Fim!");

//--------------------------------------------

/*  5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil.
*/

let diaDaSemana = 3; 

if (diaDaSemana === 1 || diaDaSemana === 7) {
    console.log("Final de semana");
} else if (diaDaSemana >= 2 && diaDaSemana <= 6) {
    console.log("Dia útil");
} else {
    console.log("Valor inválido. Insira um número de 1 a 7.");
}

console.log("Fim!");

//--------------------------------------------

/*  6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
   Caso 1) É um número divisível por 4, mas não é divisível por 100. 
   Caso 2) É um número divisível por 4, por 100 e por 400.
*/

let ano = 2024;

if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0)) {
    console.log("Esse ano é bissexto!");
} else {
    console.log("Este ano não é bissexto!");
}

console.log("Fim!");

//--------------------------------------------

/*  7. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.
 */

let idade = -9;

if (idade < 0 || idade > 130) {
    console.log("Ops! Idade Inválida!");
}

//----------------------------------------------

/*  8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/

let turno = "V";

if (turno === "V") {
    console.log("Bom dia!");
} else if (turno === "M") {
    console.log("Boa tarde!");
} else if (turno === "N") {
    console.log("Boa noite!")
} else {
    console.log("Valor inválido! Tente novamente!")
}

console.log("Fim!");