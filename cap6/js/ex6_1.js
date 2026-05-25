const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()                          // evita o envio do form
    const nome = frm.inPaciente.value           // obtém nome do paciente
    pacientes.push(nome)                        // adiciona o paciente no finl do vetor
    let lista = ""                              // string para concatenar pacientes

    // for "tradicional" (inicia em 0, enquanto menor que tamnho do array)
    for (let i = 1; i < pacientes.length; i++) {
        lista += `${i+1}. ${pacientes[i]}\n`
    }

    respLista.innerText = lista                 // exibe a lista de pacientes na página
    frm.inPaciente.value = ""                   // limpa conteúdo do campo do formulário
    frm.inPaciente.focus()                      // posiciona o curso do mouse no campo
})
// adiciona um ouvinte "click" para o btUrgencia que está no form
frm.btUrgencia.addEventListener("click", () => {
    // verifica se as validações do form estão ok (no caso, paciente is required)
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em cárater de urgência")
        frm.inPaciente.focus()                  // posiciona o cursor do mouse no campo paciente
        return                                  // retorna ao form
    }
    const nome = frm.inPaciente.value           // obtém nome do paciente
    pacientes.unshift(nome)                     // adiciona paciente no ínicio do vetor
    let lista = ""                              // string para concatenar pacientes
    // forEaach aplicado sobre o arrray pacientes
    pacientes.forEach((pacientes, i) => (lista += `${i +1 }. ${pacientes}\n`))
    respLista.innerText = lista                 // exibe a lista de pacientes
    frm.inPaciente.value = ""                   // limpa conteúdo do campo formulário
    frm.inPaciente.focus()                      // posiciona o cursor no campo
})

frm.btAtender.addEventListener("click", () => {
    //se o tamanho do vetor = 0
    if (pacientes.length === 0) {
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift()           // remove do início da fila (e obtém nome)
    respNome.innerText = atender                // exibe o nome do paciente em atendimento
    let lista = ""                              // string para concatenar pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista                 // exibe a lista de pacientes na página
})