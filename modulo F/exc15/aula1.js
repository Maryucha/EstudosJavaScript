let vaga=[5,3,4,1,2,0]

vaga[6]=6
vaga.push(7)


console.log(`O vetor tem ${vaga.length} posições`)
console.log(`Nosso vetor é o ${vaga}\n`)
console.log(`O carro na primeira vaga é ${vaga[0]}\n`)
console.log(`O carro na terceira vaga é ${vaga[3]}\n`)

console.log(`Agora com for\n`)
for(i=0;i<vaga.length;i++){
    console.log(`Na ${i} vaga temos:${vaga[i]}`)
}
console.log(`\nAgora com for in\n`)
for(let i in vaga ){
    vaga.sort()
    console.log(`Na ${i} vaga temos:${vaga[i]}`)
}

console.log(`${vaga.indexOf(15)}`)
if(vaga.indexOf(15)==-1){
    console.log(`O valor 15 não está no seu vetor!`)
}