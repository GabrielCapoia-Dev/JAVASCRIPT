let numero = document.getElementById('form-num')
let lista = document.getElementById('form-lista')
let res = document.getElementById('res')
let valores = []//Isso é um vetor


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        console.log('verdadeiro')
        return true
    } else {
        console.log("Falso")
        return false
    }
}


function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))

        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor invalido ou ja encontrado na lista')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if(valores.length == 0 ){
        alert('Adiciona algum valor antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for(let i in valores){
            soma += valores[i]
            if (valores[i] > maior)
                maior = valores[i]
            if (valores[i] < menor)
                menor = valores[i]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores é ${media}.</p>`
    }
}