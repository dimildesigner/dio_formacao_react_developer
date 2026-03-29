// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// let line = gets().split(" ");

// let pimentoes_amarelos = parseInt(line[0]); 
// let pimentoes_vermelhos = parseInt(line[1]); 

// let X = pimentoes_amarelos + pimentoes_vermelhos;

// console.log("X = " + X);


let line = "11 7".split(" "); 

let A = parseInt(line[0]);
let B = parseInt(line[1]);
console.log(`X = ${A + B}`);