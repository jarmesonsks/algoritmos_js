const cidades = ["Pelotas", "São Lourenço", "Porto Alegre"]
for (let i = 0; i < cidades.length; i++) { // percorre os itens da variavel cidade enquanto i for menor que cidades
	console.log(cidades[i])
}

console.log("-".repeat(40))
console.log(cidades.toString()) // converte para string e separa os itens por vírgula
console.log(cidades.join(" - ")) // converte para string e pede um simbolo para separar os itens