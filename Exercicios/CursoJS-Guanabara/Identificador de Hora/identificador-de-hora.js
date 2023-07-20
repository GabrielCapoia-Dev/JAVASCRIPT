function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horario =data.getHours()
    var minuto = data.getMinutes()
    

    if (horario >= 5 && horario <= 12){
        msg.innerHTML = `Agora são exatamente ${horario}:${minuto}. Bom dia!`
        img.src = 'img/img-manha.png'
        document.body.style.backgroundColor= '#c77eb2'
    } else if ( horario > 12 && horario <= 18){
        msg.innerHTML = `Agora são exatamente ${horario}:${minuto}. Boa tarde!`
        img.src = 'img/img-tarde.png'
        document.body.style.backgroundColor= '#ee7d4c'
        
    } else {
        msg.innerHTML = `Agora são exatamente ${horario}:${minuto}. Boa noite!`
        img.src = 'img/img-noite.png'
        document.body.style.backgroundColor= '#36353497'
    }


}