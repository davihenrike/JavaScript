function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document. getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[EROUUUU!] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked ) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 17) {
                // Criança
                img.setAttribute('src', 'bb homem.png')
            } else if (idade < 34 ) {
                img.setAttribute('src', 'jovem homem.png')
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src','adulto homem.png')
                // Adulto
            } else {
                // Idoso
                img.setAttribute('src','idoso homem.png')
            }
            
                
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bb mulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem mulher.png')
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src','adulto mulher.png')
                // Adulto
            } else {
                // Idoso
                img.setAttribute('src','idosa mulher.png')
            }                              
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img)
    }
    
}