const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    const item = frm.inNome.value

    let repete = ""

    for (let i = 1; i <= num; i++){
        repete += item + "*"
    }
    resp.innerText = repete
})