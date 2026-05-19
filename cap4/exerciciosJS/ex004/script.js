const prompt = require("prompt-sync")()
const num1 = Number(prompt("Lado A: "))
const num2 = Number(prompt("Lado B: "))
const num3 = Number(prompt("Lado C: "))
// primeiro validamos o triângulo
    console.log(
    num1 + num2 > num3 &&
    num1 + num3 > num2 &&
    num2 + num3 > num1
        ? "Lados podem formar um triângulo"
        : "Lados não podem formar um triângulo"
)

//depois comparamos os lados
let iguais = 0
if (num1 === num2 && num2 === num3) {
    iguais = 3
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
    iguais = 2
} else {
    iguais = 0
}
// e em seguida o classificamos
if (iguais === 3){
    console.log("Tipo: Equilatero")
} else if (iguais === 2){
    console.log("Tipo: Isóceles")
} else {
    console.log("Tipo: Escaleno")
}