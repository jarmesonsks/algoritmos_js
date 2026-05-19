// cria referencia ao form e elementos de resposta do pragrama
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    e.preventDefault() //evita o envio do form
    const nome = frm.inNome.value // obtem o valor do campo
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) /2
    resp1.innerText = `Média das notas ${media.toFixed(2)}`

    // cria as condições 
    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado`
        resp2.style.color = "green"
    } else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`
        resp2.style.color = "red"
    }
    if (horas => 8) {
        let sono = "Bem"
    } else {
        let sono = "Vei que q eu to fazendo aqui"
    }
}) 