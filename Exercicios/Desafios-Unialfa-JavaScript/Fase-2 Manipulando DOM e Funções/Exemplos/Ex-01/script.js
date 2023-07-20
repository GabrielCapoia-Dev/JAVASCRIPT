
function somar() {

    var operador = document.getElementById('operador')

    var operando = document.getElementById('operando')

    var n1 =  Number(operador.value)

    var n2 =  Number(operando.value)

    var soma = n1 + n2

    var res = document.getElementById('resultado')

    
    res.innerHTML = soma
}