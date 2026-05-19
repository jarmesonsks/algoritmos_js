// cria uma referencia ao form e elementos onde será exbida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita o envio do form

    const nome = frm.inNome.value // pega os valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value) 

    let peso 
    if (masculino) {
        peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    // apresenta a resposta
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg` 
})
// cria um ouvinte para o botão reset
frm.addEventListener("reset", () => {
    resp.innerText = "" // limpa o campo das respostas
})
