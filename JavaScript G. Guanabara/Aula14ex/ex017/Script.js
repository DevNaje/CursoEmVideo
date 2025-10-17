function tabuada() {
    const num = document.getElementById('txtn');
    const tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        window.alert("Por favor, digite um numero!")
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}

function cleanTab() {
    const num = document.getElementById('txtn');
    const tab = document.getElementById('seltab');
    if (num.value.length >= 0) {
        tab.innerHTML = ''
    }
}

function raiz() {
    const num = document.getElementById('txtn2');
    const tab = document.getElementById('seltab2');
    if (num.value.length == 0) {
        window.alert("Por favor, digite um numero!")
    } else {
        let n = Number(num.value);
        let raiz = Math.sqrt(n);
        let raizFormat
        if (Number.isInteger(raiz)) {
            raizFormat = raiz;
        } else {
            raizFormat = raiz.toFixed(3);
        }
        tab.innerHTML = '';
        let item = document.createElement('option');
        item.text = `√${n} = ${raizFormat}`;
        tab.appendChild(item);
    }
}

function cleanRaiz() {
    const num = document.getElementById('txtn2');
    const tab = document.getElementById('seltab2');
    if (num.value.length >= 0) {
        tab.innerHTML = ''
    }
}