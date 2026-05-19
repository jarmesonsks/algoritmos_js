const prompt = require("prompt-sync")()
const produto = prompt("produto: ") // lê nome do produto e...
const num = Number(prompt("Nº de Etiquetas: "))

// cria um laço d erepetição até num/2 pois cria 2 etiquetas por linha

for (let i = 1; i <= num / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
} 
if (num % 2 == 1) {   //se quantidade de etiquetas for ímpar, imprime mais uma etiqueta
    console.log(produto)
}