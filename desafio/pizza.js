// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// function findMaximumPieces(n) { 
//         return 1 + n * (n + 1) / 2; 
// } 

// let valor = gets() 

// console.log(findMaximumPieces(parseInt(valor)));


// Importamos o módulo de sistema de arquivos do Node.js
const fs = require('fs');

/**
 * Calcula o número máximo de fatias (Sequência do Preguiçoso)
 * @param {number} n - Quantidade de cortes
 * @returns {number}
 */
function findMaximumPieces(n) { 
    return 1 + (n * (n + 1)) / 2; 
} 

// Capturamos a entrada do terminal de forma síncrona
const input = fs.readFileSync(0, 'utf8').trim();

// Convertemos para inteiro
const valor = parseInt(input);

// Validação: Verificamos se o valor digitado é realmente um número
if (isNaN(valor)) {
    console.error("Erro: Por favor, insira um número inteiro válido no terminal.");
} else {
    const resultado = findMaximumPieces(valor);
    console.log(resultado);
}