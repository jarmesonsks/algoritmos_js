// cria referencia ao form e ao elemento h3(onde terá as respostas)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// cria um ouvinte de evento, acionado quando o botão "Ver promoção é clicado"
frm.addEventListener("submit", (e) => {
    const produto = frm.in1.value
    const preco  = Number(frm.in2.value)
    
    const mult = preco / 2
    const mult2 =  preco * 2 + mult
    

    resp1.innerText = `${produto} - Promoção leve 3 por R$: ${mult2}`

    resp2.innerText = `O 3º produto custa apenas R$: ${mult}`

    e.preventDefault() // evita o envio do form
});