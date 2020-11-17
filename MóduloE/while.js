console.log('---------------------')
console.log("1 Tudo bem?")
console.log("2 Tudo bem?")
console.log("3 Tudo bem?")
console.log("4 Tudo bem?")
console.log("5 Tudo bem?")
console.log("6 Tudo bem?")
console.log('---------------------')

var cont = 1, frase,idade=0

frase = 'Tudo bem?'

while (cont <= 6) {//teste no inicio
    console.log(`${cont}:${frase}`)
    cont++
}
console.log('---------------------')

do{//teste no final
    console.log(`Maryucha tem ${idade} anos.`)
    idade++
}while(idade<=31)

