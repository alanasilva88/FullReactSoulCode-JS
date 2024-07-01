// Objetos são estruturas para representar dados 

let pessoa = {
    nome: "Lana",
    cpf: "000.000.000-00",
    dataNascimento: "10/01/2000",
    contato: { // objeto aninhado
        email: "lan@email.com",
        telefone: "(99) 9-9999-9999",
        fax: "+9 999 999 9999"
    },
    endereco: {
        estado: "Pernambuco",
        cidade: "Recife",
        cep: "99999-999",
        rua: "J",
        numero: "100"

    },
    objetivosProfissionais: ["Home Office", "Desenvolvedor Senior", "Exterior" ],
    formacao: [
        {nome: "Ensino Médio", periodo: "2000-2005"},
        {nome: "Técnico em Informática", periodo: "2006-2008"},
        {nome: "Bacharelado em Computação", periodo: "2010-2015"}
    ]
}

// console.log(pessoa.nome);
// console.log(pessoa["contato"]);
// console.log(pessoa.endereco);
// console.log(pessoa.endereco.estado);
// pessoa.objetivosProfissionais.push("Dólar");
// console.log(pessoa.objetivosProfissionais);
// pessoa.objetivosProfissionais.forEach(objetivo => console.log(objetivo));
pessoa.formacao.push({nome: "Mestrado em IA", periodo: "2016-2018"});
console.log(pessoa.formacao[0].nome); // Para aparecer na saída o índice 0 com o seu respectivo nome
// Para percorrer pode usar os for
for(let f of pessoa.formacao) {
    console.log("Formação: ", f.nome);
    console.log("Período: ", f.periodo);
}

let aluno = {
    nome: "Maria",
    serie: "9 ano",
    materias: [
        {nomeMateria: "Português", nomeProfessor: "Ana" },
        {nomeMateria: "Matemática", nomeProfessor: "José" },
        {nomeMateria: "Biologia", nomeProfessor: "Almir" }

    ], 
    notas: {
        portugues: "9.0",
        matematica: "8.0",
        biologia: "9.5"
    }
        
}

console.log(aluno);


// Outra maneira de fazer 
const aluno2 = {
    nome: "Gabriel Braga",
    serie: "7º ano",
    materias: [
        { nome: "HTML", professor: "Almir" },
        { nome: "Inglês", professor: "Paul" },
        { nome: "Soft-skills", professor: "Bismark" },
    ],
    notas: [7.5, 8.0, 9.0]
};

console.log(aluno2);
