alert("Digite 0 para Sair")

do {
  const num = Number(prompt("Numero: "))
  if (num == 0 || isNaN(num)) { // se num=0 ou inválido
    const sair = confirm("Confirmar Saída?") // solicita a confirmação do usuario
    if (sair) {
      break // sai da repetição
    } else {
      continue // volta ao início do laço
    }
  }
  if (num % 2 == 0) { // se par
    alert(`O dobro de ${num} é ${num * 2}`) // mostra o dobro
  } else { // se não
    alert(`O triplo de ${num} é ${num * 3}`) // mostra o triplo
  }
} while (true) // enquanto verdade deixa o laço, pelo break
alert("Bye, bye...")