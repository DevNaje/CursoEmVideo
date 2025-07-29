var agora = new Date() //().getDay();
var dia = agora.getDay();
var hora = new Date().getHours();
var minutos = new Date().getMinutes();
var segundos = new Date().getSeconds();
switch (dia) {
    case 0:
        console.log(`Hoje é Domingo, exatamente ${hora}:${minutos}:${segundos}`);
        break;
    case 1:
        console.log(`Hoje é Segunda-feira, exatamente ${hora}:${minutos}:${segundos}`);
        break;
    case 2:
        console.log(`Hoje é Terça-feira, exatamente ${hora}:${minutos}:${segundos}`);
        break;
    case 3:
        console.log(`Hoje é Quarta-feira, exatamente ${hora}:${minutos}:${segundos}`);
        break;
    case 4:
        console.log(`Hoje é Quinta-feira, exatamente ${hora}:${minutos}:${segundos}`);
        break;
    case 5:
        console.log(`Hoje é Sexta-feira, exatamente ${hora}:${minutos}:${segundos}`);
        break;
    case 6:
        console.log(`Hoje é Sábado, exatamente ${hora}:${minutos}:${segundos}`);
        break;
    default:
        console.log("ERRO: Dia inválido");
        break;

}

if (hora >= 6 && hora < 12) {
    console.log("Tenha um Bom dia!");
}
else if (hora >= 12 && hora < 18 ) {
    console.log("Tenha uma Boa tarde!");
}
else if (hora >= 18 && hora <= 23) {
    console.log("Tenha uma Boa noite!");
}
else {
    console.log("Tenha uma Boa madrugada!");
}




