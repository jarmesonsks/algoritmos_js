const jantar = Number(prompt("valor do jantar R$: ")) // lê o valor do jantar
const garcom = jantar * 0.10 // calcula variaveis de saida
const total = jantar + garcom
alert(`Taxa Garçom R$: ${garcom.toFixed(2)} \n Total R$: ${total.toFixed(2)}`)

// toFixed(2) serve para adicionar as casas decimais