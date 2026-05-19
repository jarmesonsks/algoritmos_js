// cria referencia ao form e ao elemento h3 que apresenta a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value)
    const uso = Number(frm.tempo.value)

    const blocos = Math.ceil(uso / 15)
    const valor = preco * blocos

    resp.innerText = `Valor a pagar R$ ${valor.toFixed(2)}`
    e.preventDefault()
})