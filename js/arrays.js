// Lista de objetos - Arrays
console.log(":::: Arrays ::::\n");

const alunos = [
    {
        nome: 'Eddie',
        idade: 45,
    },
    {
        nome: 'Dami',
        idade: 35,
    },
    {
        nome: 'Maia',
        idade: 5,
    },
]

console.log(alunos[0].nome);
console.log("\n--------------------------------\n\n");

// Funcionalidades ES6 - filter
console.log(":::: Filter ::::\n");

const alunosFiltrados = alunos.filter((aluno) => aluno.idade >= 18);
console.log(alunosFiltrados);
console.table(alunosFiltrados);
console.log("\n--------------------------------\n\n");


// Funcionalidades ES6 - find
console.log(":::: Find ::::\n");

const alunaMaia = alunos.find((aluno) => aluno.nome === 'Maia');
console.log(alunaMaia);
console.log("\n--------------------------------\n\n");


// Funcionalidades ES6 - findIndex
console.log(":::: FindIndex ::::\n");

const alunaMaiaIndex = alunos.findIndex((aluno) => aluno.nome === 'Maia');
console.log(alunaMaiaIndex);
console.log("\n--------------------------------\n\n");


// Funcionalidades ES6 - reduce
console.log(":::: reduce ::::\n");

//acc = acumulator |
const idades = alunos.reduce((acc, aluno) => {
    return acc + aluno.idade //Ele vai retornar o acumulador + as idades dos alunos
},0);  
console.log(idades);
console.log("\n--------------------------------\n\n");


// Funcionalidades ES6 - some
console.log(":::: some ::::\n");

//some gera como resposta: verdadeiro ou falso, se alguma condição for favorável
const idadeMaiorDez = alunos.some(alunos => alunos.idade < 10);  
console.log(idadeMaiorDez);
console.log("\n--------------------------------\n\n");


// Funcionalidades ES6 - every
console.log(":::: every ::::\n");

//every gera como resposta: verdadeiro ou falso, se todas as condições forem favoráveis
const idadeMenorNoventa = alunos.every(alunos => alunos.idade < 90);  
console.log(idadeMenorNoventa);
console.log("\n--------------------------------\n\n");