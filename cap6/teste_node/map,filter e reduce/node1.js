const idades = [12, 12, 15, 17, 14]
let maiores = false
for (const idade of idades) {
    if (idade >= 18) {
        console.log(idade)
        maiores = true
    }
}
if (!maiores) {
    console.log("Não há idades maiores que 18 anos na lista")
}