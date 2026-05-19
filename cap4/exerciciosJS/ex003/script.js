const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor R$: "))

if (valor < 1){
    console.log("Valor invalido!")
} else if (valor < 1.75){
    console.log("Tempo: 30 min")
    const troco = valor % 1
    console.log(`Troco R$: ${troco.toFixed(2)}`)
} else if (valor < 3) {
    console.log("Tempo: 60 min")
    const troco = valor % 1.75
    console.log(`Troco R$: ${troco.toFixed(2)}`)
} else if (valor >= 3) {
    console.log("Tempo: 120 min")
    const troco = valor % 3
    console.log(`Troco R$: ${troco.toFixed(2)}`)
}