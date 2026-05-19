const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault() // evitar o envio do form

  const numero = Number(frm.inNumero.value) //obtem o numero informado
  let resposta = `Entre ${numero} e 1: ` // string que monta a resposta

  for (let i = numero; i > 1; i--) {
    resposta = resposta + i + ", " //resposta acumulando numeros e virgulas
  }
  
  resp.innerText = resposta + "1."
})