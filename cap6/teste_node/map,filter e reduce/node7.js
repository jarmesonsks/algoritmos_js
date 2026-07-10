// Define um array de objetos onde cada objeto representa um amigo com nome e idade.
const amigos = [{nome: "Ana", idade: 20},
                {nome: "Bruno", idade: 17},
                {nome: "Cátia", idade: 25}]

// Usa reduce para somar as idades de todos os amigos.
// O acumulador começa em 0 e em cada iteração adiciona a idade do amigo atual.
const soma = amigos.reduce((acumulador, amigo) => acumulador + amigo.idade, 0)

// Usa reduce para concatenar todos os nomes em uma única string.
// Começa com uma string vazia e adiciona cada nome seguido de um espaço.
const todos = amigos.reduce((acumulador, amigo) => acumulador + amigo.nome + " ", "")

// Exibe a soma das idades.
console.log(`Soma: ${soma}`)

// Exibe a string com todos os nomes concatenados.
console.log(`Todos: ${todos}`)