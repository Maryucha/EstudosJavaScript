let bunda = {}
console.log(typeof bunda) //mostra o tipo da variável

console.log("-------------------------------")

let num = [5, 8, 4]
console.log(num)

console.log("-------------------------------")

let pessoa = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) { //nomeia um objeto como função
        console.log("Engordou")
        this.peso += p //chama o opjeto peso e incrementa ele
    }
}
console.log(`${pessoa.nome} pesava ${pessoa.peso}Kg`)
console.log("-------------------------------")
pessoa.engordar(2) //dá o parametro da função
console.log("-------------------------------")
console.log(`${pessoa.nome} agora tem ${pessoa.peso}Kg`)
console.log("-------------------------------")