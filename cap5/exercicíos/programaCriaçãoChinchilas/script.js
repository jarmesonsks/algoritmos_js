const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const chinchilas = Number(frm.inNumero.value)
    const anos = Number(frm.inAnos.value)

    let resposta = "" // variavel string para concatenar a resposta
    let total = chinchilas

    for (let i = 1; i <= anos; i++) {

        resposta = `${resposta}${i}º Ano: ${total} Chinchilas\n`

        total = total * 3
    }
    resp.innerText = resposta
})