let num = document.getElementById('txtn');
let ent = document.getElementById('entradas');
let item = document.createElement('option');
let item1 = document.createElement('option');
let item2 = document.createElement('option');
let item3 = document.createElement('option');
let item4 = document.createElement('option');
let item5 = document.createElement('option');
let item6 = document.createElement('option');

let valores = []

function ananumb() {
    let n = Number(num.value);
    if (num.value.length === 0) {
        window.alert('Digite um número');
    } else if ( n < 1 || n > 100) {
        window.alert('Digite um número válido')
    } else if (valores.includes(n)) {
        window.alert('Número ja adicionado!')
    } else {
            valores.push(n)
            item.text = `Inserido o número ${n}`;
            ent.appendChild(item);
    }
        
}

function resultado() {
        if (valores.length == 0 ) {
            window.alert('Adicione um numero para finalizar!')
        } else {
            item.text = `Os valores adicionados foram: ${valores}`;
            ent.appendChild(item);  
            item1.text = `Ao todo temos: ${valores.length} números cadastrados!`;
            ent.appendChild(item1);  
            item2.text = `O maior valor é: ${Math.max(...valores)}`;
            ent.appendChild(item2);
            item3.text = `O maior valor é: ${Math.min(...valores)}`;
            ent.appendChild(item3);
            let soma = valores.reduce((acumulador, atual) => acumulador + atual, 0);
            item4.text = `A soma de todos os valores é: ${soma}`
            ent.appendChild(item4);
            item5.text = `A média dos valores cadastrados são: ${soma/valores.length}`
            ent.appendChild(item5);
        }
     }

function clean() {
     if (num.value.length >= 0 ) {
        ent.innerHTML = ''
        valores = [];
     }
}
