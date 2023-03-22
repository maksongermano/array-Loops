const palavra = "Abracadabra"; // letra a precisamos contar
let quantidade = 0

for (let letra of palavra) {
    if (letra === "a") {
        quantidade++;
    }
}

console.log(quantidade)