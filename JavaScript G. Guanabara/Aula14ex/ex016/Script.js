function verificar() {
    var inicio = Number(document.querySelector('input#nini').value);
    var fim = Number(document.querySelector('input#nfim').value);
    var passo = Number(document.querySelector('input#npas').value);
    var res = document.querySelector('div#res')
    res.innerHTML= `Contando:`;

    if (inicio.length == 0 || fim.length == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        for (var c = inicio; c <= fim; c = c + passo) {
            res.innerHTML += `👉${c} `;
        }
        res.innerHTML += '🏁';
    }
}

