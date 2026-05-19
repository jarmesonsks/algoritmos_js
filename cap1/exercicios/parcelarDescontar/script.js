const conta = Number(prompt("Total a ser pago R$: "))
const aVista = conta * 0.10
const desconto = conta - aVista
const parcela = conta / 3 
alert(`Pagamento a vista com 10% de desconto R$: ${desconto.toFixed(2)} ou Parcelado no cartão de R$: ${parcela.toFixed(2)}`)