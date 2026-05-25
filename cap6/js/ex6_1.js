const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()                      // evita o envio do form
    const nome = frm.inPaciente.value       // obtém nome do paciente
    pacientes.push(nome)                    // adiciona o paciente no finl do vetor
    let lista = ""                          // string para concatenar pacientes

    // for "tradicional" (inicia em 0, enquanto menor que tamnho do array)
    for (let i = 1; i < pacientes.length; i++) {
        lista += `${i+1}. ${pacientes[i]}\n`
    }

    respLista.innerText = lista             // exibe a lista de pacientes na página
    frm.inPaciente.value = ""               // limpa conteúdo do campo do formulário
    frm.inPaciente.focus()                  // posiciona o curso do mouse no campo
})