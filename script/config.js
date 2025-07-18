const ativaDesativa = document.querySelector('#ativar-desativar-popUp');

document.querySelector('#apagar-dados').addEventListener('click', () => {
    localStorage.clear();
    notificar('dados-apagados')
})

ativaDesativa.addEventListener('click', () => {
    ntfOn = !ntfOn;
    localStorage.setItem('ntfOn', JSON.stringify(ntfOn));
    ativaDesativa.textContent = ntfOn ? 'Desativar notificações' : 'Ativar notificações';
})

ativaDesativa.textContent = ntfOn ? 'Desativar notificações' : 'Ativar notificações';