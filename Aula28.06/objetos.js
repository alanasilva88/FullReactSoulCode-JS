// Objetos = servem para estruturar dados

/*
    let variavel = {
        propriedade1: valor1,
        propriedade2: valor2,
        propriedade3: valor3,
        propriedade4: valor4,    
    }

*/

// nome, idade, peso, altura (propriedades do objeto)
let pessoa1 = {
    nome: "Alana",
    idade: 35,
    peso: 69,
    altura: 1.63
};

let pessoa2 = {
    nome: "Maria",
    idade: 30,
    peso: 70,
    altura: 1.70
};

// Acesso de propriedade
console.log(pessoa1.nome);
console.log(pessoa2.idade);
console.log(pessoa1["altura"]); // duas formas de acesso usando ponto ou colchetes
console.log(pessoa2["peso"]);
console.log(pessoa2.email); // undefined

// Adicionando propriedades
pessoa2["email"] = "maria@email.com";
console.log(pessoa2["email"]);

// Alterar valores nas propriedades 
pessoa2.idade++; // ou pessoa1.idade = 40 ou pessoa1["idade"] = 70 ou pessoa1["idade"] += 2 para alterar a propriedade idade
console.log(pessoa1.idade);
console.log(pessoa1);
console.log(pessoa2);

// Remover propriedades
delete pessoa2.idade; // ou pessoa2["idade"]
console.log(pessoa2);

// Conversão para JSON
const dado = JSON.stringify(pessoa2);
console.log(JSON.parse(dado));wdasw
