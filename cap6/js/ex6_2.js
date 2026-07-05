const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] // vetor global com numeros já apostados
const sorteado = Math.floor(Math.random() * 100 + 1) // número aleatorio entre 1 e 100
const CHANCES = 6 // const com o numero max de chances

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value) // obtém numero digitado
    if (numero === sorteado) { // se acertou
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}` 
        frm.btSubmit.disabled = true // troca status dos botões
        frm.btNovo.className = "exibe"
    } else {
        if (erros.includes(numero)) { // se  número existe no vetor erros (já apostou)
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero) // adiciona numero ao vetor
            const numErros = erros.length // obtém tamanho do vetor
            const numChances = CHANCES - numErros // calcula número de chances
            // exibe o número de erros, conteúdo do vetor e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0) {
                
            }
        }
    }
})