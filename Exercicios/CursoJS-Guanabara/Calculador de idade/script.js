function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

 

    var formulario_ano = document.getElementById('texto_ano')



    var res = document.querySelector('div#res')
    //Essa condição testa de o usuario nao colocou nada no ano, se o ano é maior que o ano atual, se o usuario digitou zero, ou se o usuario degitou um numero com mais de 4 numeros.
    if (formulario_ano.value.length == 0 || Number(formulario_ano.value) > ano || Number(formulario_ano.value) == 0 || formulario_ano.value.length != 4) {
        alert('[Erro] Verifique os dados e tente novamente!')
    } else {

        //Resultado quando certo

        var formulario_sexo = document.getElementsByName('radio_sex')
        var idade_ano = ano - Number(formulario_ano.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        
        


        if (formulario_sexo[0].checked) {
            genero = 'Homem'
            if (idade_ano >= 0 && idade_ano <= 13) {
                //Criança
                imagem.setAttribute('src', 'img/crianca-homem.png')
            } else if (idade_ano <= 21) {
                //Jovem
                imagem.setAttribute('src', 'img/jovem-homem.png')
            } else if (idade_ano <= 50) {
                //Adulto
                imagem.setAttribute('src', 'img/adulto-homem.png')
            } else {
                //Idoso
                imagem.setAttribute('src', 'img/idoso-homem.png')
            }



        } else {
            genero = 'Mulher'
            if (idade_ano >= 0 && idade_ano <= 13) {
                //Criança
                imagem.setAttribute('src', 'img/crianca-mulher.png')
            } else if (idade_ano <= 21) {
                //Jovem
                imagem.setAttribute('src', 'img/jovem-mulher.png')
            } else if (idade_ano <= 50) {
                //Adulto
                imagem.setAttribute('src', 'img/adulto-mulher.png')
            } else {
                //Idoso
                imagem.setAttribute('src', 'img/idoso-mulher.png')
            }

        }
        res.innerHTML = `Detectamos que é ${genero} com ${idade_ano} anos.`
        res.appendChild(imagem)
    }
} 