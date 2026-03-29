console.log(":::: Function ::::");
console.log("::::::: Soma :::::::\n");

function somar(num1, num2){
    return num1 + num2;  
}
const resultado = somar(10,5);
console.log(resultado);
console.log("\n--------------------------------\n\n");


console.log(":::: Arrow Function ::::");
console.log("::::::: Subtração :::::::\n");

const subtrair = (num3, num4) => {
    return num3 - num4;  
}
const resultado2 = subtrair(10,5);
console.log(resultado2);
console.log("\n--------------------------------\n\n");



console.log(":::: Arrow Function Reduzida ::::");
console.log("::::::: multiplicação :::::::\n");

// Reduzindo o código
const multiplicar = (num5, num6) => num5 * num6; // cod reduzido
const resultado3 = multiplicar(2, 5);
console.log(resultado3);
console.log("\n--------------------------------\n\n");
