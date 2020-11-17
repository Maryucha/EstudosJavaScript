function verificar() {
    
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os Dados e tente Novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var tipo, bb, adol, jov, adu, vei, faixa
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ""

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                tipo = bb
                faixa = 'Criança'
                img.setAttribute('src','bbboy.png')
            } else if (idade > 10 && idade < 18) {
                tipo = adol
                faixa = 'Adolescente'
                img.setAttribute('src','guriz.png')
            } else if (idade > 18 && idade < 25) {
                tipo = jov
                faixa = 'Jovem'
                img.setAttribute('src','guy.png')
            } else if (idade > 25 && idade < 60) {
                tipo = adu
                faixa = 'Adulto'
                img.setAttribute('src','homi.png')
            } else if (idade > 60) {
                tipo = vei
                faixa = 'Old Schol'
                img.setAttribute('src','vo.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                tipo = bb
                faixa = 'Criança'
                img.setAttribute('src','bbgilr.png')
            } else if (idade > 10 && idade < 18) {
                tipo = adol
                faixa = 'Adolescente'
                img.setAttribute('src','guriaz.png')
            } else if (idade > 18 && idade < 25) {
                tipo = jov
                faixa = 'Jovem'
                img.setAttribute('src','tica.png')
            } else if (idade > 25 && idade < 60) {
                tipo = adu
                faixa = 'Adulta'
                img.setAttribute('src','muie.png')
            } else {
                tipo = vei
                faixa = 'Old Schol'
                img.setAttribute('src','voa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero}, ${faixa} e tem ${idade} anos de idade`
        res.appendChild(img)
    }

}