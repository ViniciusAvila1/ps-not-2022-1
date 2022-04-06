let pessoa = require("./modelos/pessoa.js");
let produto = require("./modelos/produto.js");
let calculos = require("./modelos/calcular.js");

const valorProduto = 10;
mineiro = pessoa();
prod = produto();
//imposto = calcular();

console.log(JSON.stringify(mineiro));
console.log("Nome: " + mineiro.nome);
console.log("Profissão: " + mineiro.profissao);
console.log("Idade: " + mineiro.idade);
console.log("Cidade: " + mineiro.cidade);

console.log("----------------------------")

console.log(JSON.stringify(prod));
console.log("Marca: " + prod.marca);
console.log("Produto: " + prod.produto);
console.log("Vencimento: " + prod.vencimento);

console.log("----------------------------")

console.log("Valor do produto: " + valorProduto);
console.log("Valor do imposto: " + calculos.valor(valorProduto));
console.log("Valor com imposto: " + calculos.adicionar(valorProduto));

