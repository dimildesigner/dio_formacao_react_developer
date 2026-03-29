// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// - "array.length": verifica o tamanho de um array;

// var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }


const numeros = [2, 3, 5, 7, 11, 13, 18, 34];

// O método filter cria uma nova lista apenas com os pares
// O método forEach percorre essa lista resultante para imprimir
numeros
  .filter(n => n % 2 === 0)
  .forEach(par => console.log(par));