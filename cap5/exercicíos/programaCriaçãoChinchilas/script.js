const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const chinchilas = Number(frm.inNumero.value)
    const anos = Number(frm.inAnos.value)
    let resposta = "" // variavel string para concatenar a resposta

    for (let i = 1; i <= anos; i++) {

        // triplica a quantidade de chinchilas a cada ano
        let total = chinchilas * 3 ** i

        resposta = `${resposta}${i}º Ano: ${total} Chinchilas\n`
    }
    resp.innerText = resposta
})