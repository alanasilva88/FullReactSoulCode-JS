// Filter = Cria um novo array com todos os elementos que passaram no teste da função

const notas = [7.0, 8.4, 9.0, 5.5];
const notasAcima7 = notas.filter((notas) => notas > 7);

console.log(notasAcima7);

// Exemplo: Filtro de arquivos

let arquivosPasta = ["codigo.js", "estilos.css", "index.html", "sobre.html"];
let extensao = ".html";

const arquivosHtml = arquivosPasta.filter((arquivo) => arquivo.endsWith(extensao));
console.log(arquivosHtml);

const arquivosFiltro = arquivosPasta.filter((arquivo) => arquivo.endsWith(extensao) || arquivo.endsWith(".js"));
console.log(arquivosFiltro);



// Exemplo: Lista de presença 
let turma = ["Ana", "Alana", "Beatriz", "João"];
let presenca = ["Alana", "Beatriz"];

const ausentes = turma.filter((aluno) => !presenca.includes(aluno));
console.log(ausentes);

// Exemplo: Filtrar palavras acima de 5 caracteres

let array = ["gato", "cachorro", "elefante", "pássaro", "peixe", "tigre"];
let palavrasAcima5 = array.filter((palavras) => array.length > 5);
console.log(palavrasAcima5);
