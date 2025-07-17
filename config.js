const ativaDesativa = document.querySelector('#ativar-desativar-popUp');
const off = document.querySelector('#on-off');
let ntfOn = true;

document.querySelector('#apagar-dados').addEventListener('click', () => {
    localStorage.clear();
    notificar('dados-apagados')
    console.log('dados apagados')
})

const estadoNtf = JSON.parse(localStorage.getItem('ntfOn'));
console.log(estadoNtf)

ativaDesativa.addEventListener('click', () => {
    ntfOn = !ntfOn;
    localStorage.setItem('ntfOn', JSON.stringify(ntfOn))
    ntfOn? off.textContent = 'Desativada' : off.textContent = 'Ativada';
})