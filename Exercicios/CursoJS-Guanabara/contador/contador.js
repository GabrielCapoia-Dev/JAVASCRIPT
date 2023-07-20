function contar() {
    let inicio = document.getElementById('txt_inicio')
    let fim = document.getElementById('txt_fim')
    let passo = document.getElementById('txt_passo')
    let resultado = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` \u{1F449} ${c} `
            }
            resultado.innerHTML += `\u{1F3C1}`
        } else {
            //Decresctente
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` \u{1F449} ${c} `
            }
            resultado.innerHTML += `\u{1F3C1}`

        }

    }
}