// Define um array de números inteiros.
const numeros = [10, 13, 20, 8, 15] // vetor inicial

// Usa filter para criar um novo array com apenas os valores pares.
// A função de callback recebe cada número e testa se o resto da divisão por 2 é zero.
const pares = numeros.filter(num => num % 2 === 0)

// Converte o array resultante em string separada por vírgulas e imprime no console.
console.log(pares.join(", ")) // 10, 20, 8 