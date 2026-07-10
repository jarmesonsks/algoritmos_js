// Define um array de números inteiros.
const numeros = [10, 13, 20, 8, 15]

// Usa reduce para somar todos os valores do array.
// A cada passo, o acumulador recebe o total parcial e somamos o próximo número.
// O segundo argumento do reduce (0) é o valor inicial do acumulador.
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0)

// Exibe o resultado final da soma.
console.log(`Soma: ${soma}`) // soma 66