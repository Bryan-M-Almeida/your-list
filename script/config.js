/* Constantes */
const ativaDesativa = document.querySelector('#ativar-desativar-popUp');
const totalTarefas = document.querySelector('#total-tarefas');
const totalDeletadas = document.querySelector('#deletadas');
const totalFeitas = document.querySelector('#feitas');

const dadosTarefas = {
    total: localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem('tarefas')).length : 0,
    feitas: localStorage.getItem('feitas') ? JSON.parse(localStorage.getItem('feitas')) : 0,
    deletadas: localStorage.getItem('deletadas') ? JSON.parse(localStorage.getItem('deletadas')) : 0
}

totalTarefas.textContent = dadosTarefas.total;
totalDeletadas.textContent = dadosTarefas.deletadas;
totalFeitas.textContent = dadosTarefas.feitas;

console.log(dadosTarefas.total);

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

