const prompt = require('prompt-sync')()

let num

do {
  num = Number(prompt("Numero: "))
  if (num == 0 || isNaN(num)) {
    console.log("Digite um número válido..")
  }
} while (num == 0 || isNaN(num))

let pares = `Pares entre 1 e ${num}: `
for (let i = 2; i <= num; i = i + 2) {
  pares = pares + i + ", "
}

console.log(pares)