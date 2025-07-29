function mostrarHora() {
    // Corrigindo a função para mostrar a hora atual
    var agora = new Date();
    var hora = agora.getHours().toString().padStart(2, '0');

    var minutos = agora.getMinutes().toString().padStart(2, '0');
    var segundos = agora.getSeconds().toString().padStart(2, '0');
    var horarioFormatado = `${hora}:${minutos}:${segundos}`;
    var img = document.querySelector('#foto-dia');
    document.querySelector('#relogio').textContent = `Agora são ${horarioFormatado} horas.`;


    if (horarioFormatado >= '05:00:00' && horarioFormatado < '12:00:00') {
        img.src = 'imagens-dia/manha.jpg';
        document.querySelector('#mensagem').textContent = 'Bom dia!';
        document.body.style.background = 'rgb(207, 177, 3)';
    } else if (horarioFormatado >= '12:00:00' && horarioFormatado < '18:00:00') {
        img.src = 'imagens-dia/tarde.jpg';
        document.querySelector('#mensagem').textContent = 'Boa tarde!';
        document.body.style.background = 'rgb(170, 38, 4)';
    } else if (horarioFormatado >= '18:00:00' && horarioFormatado <= '23:59:59') {
        img.src = 'imagens-dia/noite.jpg';
        document.querySelector('#mensagem').textContent = 'Boa noite!';
        document.body.style.background = 'rgba(19, 17, 17, 0.93)';
    } else if (horarioFormatado >= '00:00:00' && horarioFormatado < '05:00:00') {
        img.src = 'imagens-dia/noite.jpg';
        document.querySelector('#mensagem').textContent = 'Boa madrugada!';
        document.body.style.background = 'rgba(49, 30, 30, 0.93)';
    }
}

setInterval(mostrarHora, 1000);
mostrarHora();