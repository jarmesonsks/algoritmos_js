const frm = document.querySelector("form") // obtem elementos da pagina
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let resposta = ""
    // cria o laço de repetição, começa com 1 e é incrementado até 10
    for (let i = 1; i<= 10; i++) {
        // a variavel "resposta" vai acumulando os novos conteudos
        //resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
        resposta = `${resposta}${numero} x ${i} = ${numero *i}\n`
    }
    resp.innerText = resposta
})