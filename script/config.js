/* Constantes */
const ativaDesativa = document.querySelector('#ativar-desativar-popUp');

/* Estado do Pop-Up */
ativaDesativa.textContent = ntfOn ? 'Desativar notificações' : 'Ativar notificações';

/* Apaga dados */
document.querySelector('#apagar-dados').addEventListener('click', () => {
    localStorage.clear();
    notificar('dados-apagados')
})

/* Ativa ou desativa Pop-up */
ativaDesativa.addEventListener('click', () => {
    ntfOn = !ntfOn;
    localStorage.setItem('ntfOn', JSON.stringify(ntfOn));
    ativaDesativa.textContent = ntfOn ? 'Desativar notificações' : 'Ativar notificações';
})

