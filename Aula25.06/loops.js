// Estrutura de repetição = loops = laços
// Essas estruturas possuem:
    // Condição de parada
    // Valor inicial (Variável de controle ou um contador)
    // Atualização

// While = Enquanto - repetição indefinida
/*
    while (condição) {
        // o código que será repetido 
    }
*/
// Loop infinito - quando não possue condição de parada

let numero = 0;

while (numero < 10) {
    console.log(numero);
    numero++;
}

console.log("FIM!")

//-----------------------------

let numero2 = 1;

while (numero2 <= 50) {
    console.log(numero2);
    numero2 = numero2 * 5;
}

console.log("FIM!");

//-------------------------------

let numero3 = 0;

while (numero3 <= 50) {
    console.log(numero3);
    numero3 += 5; // resumo da sintaxe de incremento
}

console.log("FIM!");

//-------------------------------

let numero4 = 100;

while (numero4 >= 0) {  // para não mostrar o -1 o correto seria colocar numero4 > 0 apenas
    console.log(numero4);
    numero4--;
}

console.log(numero4);

//---------------------------------

// Soma do 1 + 2 + 3... + 10
let cont = 1;
let soma = 0; // acumulador

// Do 1 até 10
while (cont <= 10) {
    soma = soma + cont;
    cont++;
}
console.log(soma);

console.log("FIM!");