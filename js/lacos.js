console.log("\n::::::: Laços de repetições :::::::");

console.log("\n\n:::: For ::::\n");

for(let i = 1; i < 11; i++){
    console.log("Valor", i);
}

console.log("\n--------------------------------\n\n");

console.log("\n:::: For - Tabuada do 5 ::::\n");

for(let i = 1; i < 11; i++){
    console.log(`${i} x 5 = ${i * 5}`);
}

console.log("\n--------------------------------\n\n");

console.log("\n:::: For - Sequencia de 10 em 10, pares ::::\n");

for(let i = 1; i <= 10; i++){
    if (i % 2 === 0) {
        console.log(`${i} x 5 = ${i * 5}`);
    }    
}

console.log("\n--------------------------------\n\n");

console.log("\n:::: While - Tabuada do 5 ::::\n");
let x = 1;
while(x < 11){
    console.log(`${x} x 5 = ${x * 5}`);
    x++;
}

console.log("\n--------------------------------\n\n");

console.log("\n:::: ForEach - Tabuada do 5 ::::\n");
const valores = [1,2,3,4,5,6,7,8,9,10];
valores.forEach((value) => {
    console.log(`${value} x 5 = ${value * 5}`);
});

console.log("\n--------------------------------\n\n");

console.log("\n:::: Map ::::\n");
const valores2 = [1,2,3,4,5,6,7,8,9,10];
const resultado = valores2.map((value) => {
    return value * 5;
});

console.log(resultado);

console.log("\n--------------------------------\n\n");