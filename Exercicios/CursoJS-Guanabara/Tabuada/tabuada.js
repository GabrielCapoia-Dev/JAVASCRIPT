function tabuada(){

    let numero = document.getElementById('txt_numero')
    let tab = document.getElementById('select_tab')

    if (numero.value.length == 0) {
        alert('Por favor Digite um numero!')
    } else {
        let num = Number(numero.value)
        tab.innerHTML = ''
        for(c=1;c<=10;c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}