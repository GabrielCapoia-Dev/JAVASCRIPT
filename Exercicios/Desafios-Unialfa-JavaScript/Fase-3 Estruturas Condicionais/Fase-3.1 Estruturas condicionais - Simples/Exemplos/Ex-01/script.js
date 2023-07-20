
function verificar(){
    var resultado = document.getElementById('resultado')
    var velocimetro = Number(document.getElementById('velocimetro').value)
    
    resultado.style.color = 'white'
    resultado.style.marginTop = '50px'
    resultado.style.fontSize = '20pt'


    if (velocimetro > 80) {
        
        resultado.innerHTML = `Voce esta a ${velocimetro} Km/h. Multado!!`
    } else {
        resultado.innerHTML = `Tenha uma boa viagem`
    }
}