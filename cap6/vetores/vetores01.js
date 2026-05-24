// const produtos = ["Arroz", "Feijão", "Iogurte"]

const cidades = ["Pelotas"] // declara e define conteúdo inicial do vetor

cidades.push("São Lourenço") // adiciona uma cidade ao final do vetor
console.log(cidades)  // exibe as cidades

cidades.unshift("Porto Alegre") // adiciona ao inicio e desloca as demais
console.log(cidades) // exibe as cidades

const ultima = cidades.pop() // remove a ultima cidade do vetor
console.log(cidades)

const primeira = cidades.shift() // remove a primeira e "sobe" as demais na lista
console.log(cidades)