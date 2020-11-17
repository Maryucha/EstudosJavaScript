var agora=new Date()
var diaSem=agora.getDay()

/*
Domingo:0
Segunda:1
Terça:2
Quarta:3
Quinta:4
Sexta:5
Sabádo:6
*/

switch (diaSem) {
    case 0:
        console.log(`Bom dia!\nHoje é DOMINGO!`)
        break;
    case 1:
        console.log(`Bom dia!\nHoje é SEGUNDA!`)
        break;
    case 2:
        console.log(`Bom dia!\nHoje é TERÇA!`)
        break;
    case 3:
        console.log(`Bom dia!\nHoje é QUARTA!`)
        break;
    case 4:
        console.log(`Bom dia!\nHoje é QUINTA!`)
        break;
    case 5:
        console.log(`Bom dia!\nHoje é SEXTA!`)
        break;
    case 6:
        console.log(`Bom dia!\nHoje é SÁBADO!`)
        break;
    default:
        console.log(`Sua semana não tem 8 dias!`)
        break;
}