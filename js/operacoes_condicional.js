const valor1 = 10;
const valor2 = 2;

console.log("\n::::::: Operações Básicas :::::::\n");
console.log(":::: Valor1 = 10, Valor2 = 2 ::::\n");
console.log('-> Soma: ', valor1 + valor2);
console.log('-> Substração: ', valor1 - valor2);
console.log('-> Multiplicação: ', valor1 * valor2);
console.log('-> Divisão: ', valor1 / valor2, "\n");


console.log("\n--------------------------------\n\n");



console.log("\n::::::: Condicionais :::::::");

// console.log(":::: Operador  |  Significado ::::\n")
// console.log(":::: &&  |  AND (E) ::::")
// console.log(":::: ||  |  OR (OU) ::::")
// console.log(":::: == ===  |  IGUAL ::::")
// console.log(":::: != ou !===  |  DIFERENTE ::::")
// console.log(":::: >  |  Maior que ::::")
// console.log(":::: <  |  Menor que ::::\n")

console.log("\n\n:::: Idade ::::\n");
const idade = 17;

if(idade > 18){
    console.log('Maior que 18');
}

else {
    console.log('Manor que 18');
}

console.log("\n\n:::: Notas ::::\n");
const nota = 7;

if(nota > 5){
    console.log('Abaixo da média\n');
}

else if (nota < 7) {
    console.log('Está a média\n');
}

else {
    console.log('Acima da média\n');
}


console.log("\n--------------------------------\n\n");


console.log("\n::::::: Ternário :::::::");

console.log("\n\n:::: Notas ::::\n");

nota > 6 ? console.log("Aprovado!") : console.log("Reprovado!"); // usa a interrogação para servir de "se" e os dois pontos "então"


console.log("\n--------------------------------\n\n");