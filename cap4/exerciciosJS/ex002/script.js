const prompt = require("prompt-sync")()
const permitida = Number(prompt("Velocidade permitida: "))
const condutor = Number(prompt("Velocidade do condutor: "))

const velocidade =  ((condutor - permitida) / condutor) * 100

console.log(
    velocidade > 20 ? "Multa Grave" : "Multa leve"
)