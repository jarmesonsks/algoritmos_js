// cria referencia ao form e elemento h3 onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    // obtem e converte o conteudo do campo inHoraBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    }
    //exibe a resposta
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
})