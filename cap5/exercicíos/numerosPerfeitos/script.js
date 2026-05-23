const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)

    let soma = 0
    let divisores = ""
    let resposta = "" // variavel que acumula a resposta

    for (let i = 1; i < num; i++) {
        if (num % i === 0){
            divisores += i + " "
            soma += i 
        }
    }
    // monta a resposta
    resposta = `Divisores: ${divisores}\n`
    resposta += `Soma dos divisores ${soma}\n`

    //verifica se é perfeito 
    if (soma === num) {
        resposta += `${num} é um número perfeito`
    } else {
        resposta += `${num} não é um número perfeito`
    }
    
    resp.innerText = resposta
})