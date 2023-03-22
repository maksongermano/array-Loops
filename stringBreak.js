const palavra = 'Brasil';
let encontrado = false;
for (let letra of palavra) {
    if (letra === "h") {
        console.log('tem letra H');
        encontrado = true
        break;
    }


}// pode usar a palavra não na programação ! 
// if(!encontrado)
if (encontrado === false) {
    console.log("Não tem h");
}
