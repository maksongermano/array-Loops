const numeros = [0, 3, 18, 19, 13, 5, 46,];

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    //será exécutado para ir de 0 até 7 | 8 não será executado
    soma = soma + numeros[i];
    // soma += numeros[i]

}

console.log(soma);