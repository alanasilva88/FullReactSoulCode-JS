// Strings - cadeias de caracteres

const nome = "Alana";
const sobrenome = 'Silva';

// Interpolação de strings 
const nomeCompleto = `${nome} "${sobrenome}"`; // Uma maneira de ser usado

console.log(nomeCompleto);

// Formação de strings
let meuPet = "Fred";

// 0 -> "F",
// 1 -> "r",
// 2 -> "e",
// 3 -> "d"

let comida = "Batata Assada";
console.log(comida[0]);
console.log(comida[1]);
console.log(comida[2]);
console.log(comida[6]);
console.log(comida[8]);
console.log(comida[500]); //undefined = não existe essa posição na string

// Tamanho da string - quantos caracteres tem na variável.
console.log(comida.length);
console.log(comida[comida.length - 1]); // último caractere

// Percorrendo a string caractere por caractere
for(let i = 0; i < comida.length; i++) {
    console.log(comida[i]); // Mostra um caractere por vez e apenas com o (i) aparece os índices por vez
}

//---------------------------------------
// Funções de string
let palavra = "Java Script";
console.log(palavra.toLowerCase()); // Minúscula. Cria uma nova string - se quiser guardar esse valor salva em outra variável
console.log(palavra.toUpperCase()); //Maiúscula
console.log(palavra.charAt(0)); // Palavra[0]
console.log(palavra.replace("Java", "Type")); // Troca de palavras, letras, retira espaçamentos... troca apenas a primeira ocorrência, mas o replaceAll troca todas as ocorrências e ele gera uma nova string

//---------------------------------------
// Declara uma frase
let frase = "Eu comi arroz, feijão, batata e carne.";

// Verifica se a frase contém a palavra "carne"
console.log(frase.includes("carne"));  // Espera-se que imprima: true

// Verifica se a frase contém a palavra "alface"
if(frase.includes("alface")) {
    console.log("Muito bem!");
} else {
    console.log("Coma algo saudável!");
}

//-------------------------------------
let arquivo = "musica.mp3";

console.log(arquivo.endsWith("mp3")); // Verifica se termina com 'mp3'
console.log(arquivo.endsWith("mpa"));
console.log(arquivo.startsWith("mus"));

// Slice
console.log(arquivo.slice(0, 3)); // Recorta a string do índice 0 até 3
console.log(arquivo.slice(0, 4)); 
console.log(arquivo.slice(4, 6)); 