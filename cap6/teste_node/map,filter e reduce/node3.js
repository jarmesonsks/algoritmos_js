
// Define um array de objetos, onde cada objeto representa um amigo com nome e idade.
const amigos = [{nome: "Ana", idade: 20},
                {nome: "Bruno", idade: 17},
                {nome: "Cátia", idade: 25}]

// Cria um novo array usando map para transformar cada amigo.
// A cada objeto 'aux' do array original, cria-se um novo objeto com o mesmo nome
// e a propriedade 'nasc' calculada como o ano de nascimento.
const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2022 - aux.idade}))

// Percorre o array transformado para exibir o nome e o ano de nascimento de cada amigo.
for (const amigo of amigos2) {
    console.log(`${amigo.nome} - Nasceu em ${amigo.nasc}`)
}