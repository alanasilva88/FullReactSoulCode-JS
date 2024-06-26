/*
    1. Escreva um programa que inverte uma string
*/

let str = "Alana";
let invertedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    invertedStr += str[i];
}

console.log("String original:", str);
console.log("String invertida:", invertedStr);




/*
    2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"
*/
let frase = "Faço bootcamp na Soulcode";
let palavraRemover = "Faço";

let novaFrase = frase.replace(palavraRemover, "###");
console.log(novaFrase);


/*
    3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com
*/
let email = "exemplo@soulcode.com";
let dominio = "soulcode.com";

if(email.endsWith("@" + dominio)) {
    console.log("Muito bem! O email está no domínio soulcode.com!");
} else {
    console.log("Ops! O email não está no domínio soulcode.com!");
}

//--------------------------------- CORREÇÃO ------------------------------------------

// 1. Escreva um programa que inverte uma string
// "Batata" -> "atataB"
let palavra = "Batata Assada";
let invertida = "";

for(let i = palavra.length - 1; i >= 0; i--) {
    invertida = invertida + palavra[i]
    console.log(invertida);
}
console.log(invertida);

// 2. Crie uma variável que armazena uma frase, e 
// utilize as funcionalidades de string para remover uma palavra 
// específica da frase e trocar por "###"
let frase = "Eu jogo LOL e Valorant, LOL é top";
let fraseCensurada = frase.replaceAll("LOL", "*******");

console.log(fraseCensurada);

// 3. Crie uma variável que armazena um email, o programa deve 
// indicar se este email é do domínio soulcode.com // soulcodeacademy.org
const emailProf = "professor@soulcodeacademy.org";

if(emailProf.endsWith("soulcode.com") || emailProf.endsWith("soulcodeacademy.org")) {
    console.log("Este email pertence a Soulcode!");
} else {
    console.log("Este email não pertence a Soulcode!")
}
