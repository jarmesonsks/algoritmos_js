const prompt = require("prompt-sync")()
const num = Number(prompt("Digite um número: "))

const sobra = num % 2

console.log(
  sobra >= 1 ? `${num} é ímpar` : `${num} é par` // o : é a comparação e divisão da tarefa
)