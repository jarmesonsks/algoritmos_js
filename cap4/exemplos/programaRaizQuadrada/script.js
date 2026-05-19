const frm = document.querySelector("Form") // obtém elementos da pagina
const resp = document.querySelector("h3")
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value) // Obtem numero digitado no form
    const raiz = Math.sqrt(numero) // calcula raiz quadrada do número
    if (Number.isInteger(raiz)) {
        resp.innerText = `Raiz ${raiz}`
    } else {
        resp.innerText = `Não há raiz exata para ${numero}`
    }

})