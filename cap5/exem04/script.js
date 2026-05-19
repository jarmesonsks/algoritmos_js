const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")  // obtem elementos da pagina

let resposta = "" // string com a res a ser exibida
let numContas = 0 // inicializa o contador
let valTotal = 0 // e acumulador (variaveis globais)

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const descricao = frm.inDescricao.value // obtem os dados do form
  const valor = Number(frm.inValor.value)

  numContas++ // adicona valores ao contador e acumulador 
  valTotal = valTotal + valor
  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
  resp1.innerText = `${resposta} --------------------`
  resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

  frm.inDescricao.value = "" //limpa campos do form 
  frm.inValor.value = "" 
  frm.inDescricao.focus() //posiciona no campo inDescricao do form
})