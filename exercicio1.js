const nomesDosPaises = ["Brazil", 'Mexico', 'Germany', 'China', 'venezuela'];

//exibri os nomes
//nomesDosPaises.push('Makson')

console.log(nomesDosPaises)
//remover pais do fim da lista
nomesDosPaises.pop();
console.log(nomesDosPaises)

// adicionar um pais ao inicio da lista
nomesDosPaises.unshift('Venezuela')
console.log(nomesDosPaises);

//remover um paiz do inicio da lista
nomesDosPaises.shift();
console.log(nomesDosPaises)

//imprimir o último item da lista

const ultimo = nomesDosPaises[nomesDosPaises.length - 1]
console.log(ultimo)

// imprima o segundo pais da lista

console.log(nomesDosPaises[1]);

//Imprima o país de indice 2 
console.log(nomesDosPaises[2]);