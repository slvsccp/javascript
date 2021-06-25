function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 12) {
                //CRIANÇA
                img.setAttribute('src', 'images/bebemasc.png');
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'images/jovemasc.png');
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'images/adultomasc.png');
            } else {
                //IDOSO
                img.setAttribute('src', 'images/idosomasc.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 12) {
                //CRIANÇA
                img.setAttribute('src', 'images/bebefem.png');
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'images/jovemfem.png');
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'images/adultofem.png');
            } else {
                //IDOSO
                img.setAttribute('src', 'images/idosafem.png');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}