var idade = 12
console.log(`Você tem ${idade} anos de idade.\n`)
if(idade<16){
    console.log("Menor de idade! \nNão vota!")
}else{
    if(idade>=16 && idade<65){
        console.log("Voto obrigatório!")
    }else{
        console.log("Voto opcional!")
    }
}