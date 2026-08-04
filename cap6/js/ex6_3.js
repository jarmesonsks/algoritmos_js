const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e) => {
    // evita envio do form
    e.preventDefault() 
    // obtem os dados dos inputs
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    // adiciona dados ao vetor de objetos
    carros.push({ modelo, preco }) 
    // limpa campos do form
    frm.inModelo.value = "" 
    frm.inPreco.value = ""
    // posiciona o cursor em inModelo
    frm.inModelo.focus()
    // dispara um evento de click em btListar (equivale a um click no botão da pagína)
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if(carros.length === 0) {
        alert("Não há carros na lista")
        return
    }
    // método reduce() cancatena uma string , obtendo modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + " - R$ " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos Veiculos Cadastrados\n${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if(maximo === 0 || isNaN(maximo)){
        return
    }

    // cria um novo vetor com os objetos que atendem a condição de filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if(carrosFilter.length === 0) {
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }
    let lista = ""
    for (const carro of carrosFilter) {
        lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n${"- ".repeat(40)}\n${lista}`
}) 
frm.btSimuluar.addEventListener("click", () => {
    const desconto = Number(prompt("Qual o percentual de desconto: "))
    if (desconto == 0 || isNam(desconto)){ // se não informou ou valor inválido
        return
    }
    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))
    let lista = ""
    for(const carro of carrosDesc) { // percorre cada elemento do array
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista]}`
}