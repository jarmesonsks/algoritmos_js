const numeros = [10, 13, 20, 8, 15] // vetor inicial
const dobros = numeros.map(num => num * 2)  // cada número é obtido e multiplicado por 2

console.log(dobros.join(", ")) // 20, 26, 40, 16, 30