// cria referencia ao form e aos elementos h3 que apresentam a resposta
const frm = document.querySelector("form")
const res1 = document.querySelector("#outResp1")
const res2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const medicamento = frm.med.value
    const preco = Number(frm.inPreco.value)

    const promo = Math.floor(preco * 2)

    res1.innerText = `Promoção de ${medicamento}`
    res2.innerText = `Leve 2 por apenas R$: ${promo.toFixed(2)}`

    e.preventDefault()
})