function verificar() {
var anoatual = new Date().getFullYear();
var ano = document.querySelector('input#txtano').value;
var res = document.querySelector('div#res'); // Use 'res' to display the result
if (ano.length == 0 || Number(ano) > anoatual) {
    window.alert('[ERRO] Verifique o ano de nascimento e tente novamente !');
} else { 
    var sexf = document.getElementsByName('sex');
    var idade = anoatual - Number(ano);
    var genero = '';
    var img = document.createElement('img'); // Create an image element
    img.setAttribute('id', 'foto'); // Set the id for the image
} 
if (sexf[0].checked) {
    genero = 'Homem';
    if (idade >= 0 && idade < 11) {
        img.setAttribute('src', 'imagens/homem-criança.jpg');
    } else if (idade < 18) {
        img.setAttribute('src', 'imagens/homem-jovem.jpg');
    } else if (idade < 60) {
        img.setAttribute('src', 'imagens/homem-adulto.jpg');
    } else {
        img.setAttribute('src', 'imagens/homem-idoso.jpg');
    }
} else if (sexf[1].checked) {
    genero = 'Mulher';
    if (idade >= 0 && idade < 11) {
        img.setAttribute('src', 'imagens/mulher-criança.jpg');
    } else if (idade < 18) {
        img.setAttribute('src', 'imagens/mulher-jovem.jpg');
    } else if (idade < 60) {
        img.setAttribute('src', 'imagens/mulher-adulto.jpg');
    } else {
        img.setAttribute('src', 'imagens/mulher-idoso.jpg');
    }

}      
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;  
    res.appendChild(img);

}
 