function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutos}.`
if (hora >= 0 && hora < 12) { 
    //bom dia
    res.innerHTML = ('Bom dia!')
    img.src = 'manhã.png'
    document.body.style.background = '#add8e6'
} else if (hora >= 12 && hora < 18) {
    // boa tarde
    res.innerHTML = ('Boa Tarde!')
    img.src = 'tarde.png'
    document.body.style.background = '#ffa07a'
} else {
    //boa noite
    res.innerHTML = ('Boa Noite!')
    img.src = 'noite.png'
    document.body.style.background = '#001b07'
    }
    }