// Define um array de objetos onde cada objeto representa um amigo com nome e idade.
const amigos = [{nome: "Ana", idade: 20},
                {nome: "Bruno", idade: 17},
                {nome: "Cátia", idade: 25}]

// Cria um novo array com os amigos que satisfazem pelo menos uma das condições:
// - idade maior ou igual a 21
// - nome que contém a letra "B"
const amigos2 = amigos.filter(aux => aux.idade >= 21 || aux.nome.includes("B"))

// Percorre o array original
// Cada amigo é exibido no console com seu nome e idade.
for (const amigo of amigos2) {
    console.log(`${amigo.nome} - Idade ${amigo.idade} anos`)
}

// caso não haja amigos com as condições exibe a mensagem
if (amigos2.length === 0){
    console.log("Não há amigos com essas condições")
}