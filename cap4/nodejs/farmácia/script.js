const prompt = require("prompt-sync")() // adiciona o pacote do prompt
const valor = Number(prompt("Valor da Compra R$: ")) // lê o valor da compra
const aux = Math.floor(valor / 20) // aux = nº de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux // operador ternario 
const valorParcela = valor / parcelas // calcula o valor das parcelas
console.log(`Pode pagar em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`)