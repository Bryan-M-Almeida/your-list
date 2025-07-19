/* Constantes */
const mensagens = ['Tarefa Salva', '+ 1 tarefa concluída', 'Tarefa deletada', 'Tarefa editada', 'Dados apagados', 'Erro, tarefa vazia']
const cores = ['bg-[#32ADE6]', 'bg-[#34C759]', 'bg-red-500', 'bg-[#FF9500]', 'bg-[#FF3B30]', 'bg-[#FF2D55]'];
const div = document.querySelector('#pop-up');

let msgIndex = 0;

/* Dados */
let ntfOn = localStorage.getItem('ntfOn');
ntfOn = ntfOn === null ? true : JSON.parse(ntfOn);






/* Notificação Pop-Up */
function notificar(e) {
    if (!ntfOn) return;
    const h1 = document.createElement('h1');
    div.appendChild(h1);

    if (e === 'salvo') {
        msgIndex = 0;
        const msgClasse = `item ${cores[msgIndex]} p-4 sm:p-5 md:p-5 lg:p-8 rounded-md transform cursor-pointer transition duration-500 text-xl md:text-3xl text-center text-black`;
        h1.className = msgClasse;
        h1.textContent = mensagens[msgIndex];
    }
    else if (e === 'concluido') {
        msgIndex = 1;
        const msgClasse = `item ${cores[msgIndex]} p-4 sm:p-5 md:p-5 lg:p-8 transform cursor-pointer transition duration-500 text-xl md:text-3xl text-center rounded-md text-black`;
        h1.className = msgClasse;
        h1.textContent = mensagens[msgIndex];
    }
    else if (e === 'deletado') {
        msgIndex = 2;
        const msgClasse = `item ${cores[msgIndex]} p-4 sm:p-5 md:p-5 lg:p-8 transform cursor-pointer transition duration-500 text-xl md:text-3xl text-center rounded-md text-black`;
        h1.className = msgClasse;
        h1.textContent = mensagens[msgIndex];
    }
    else if (e === 'editado') {
        msgIndex = 3;
        const msgClasse = `item ${cores[msgIndex]} p-4 sm:p-5 md:p-5 lg:p-8 transform cursor-pointer transition duration-500 text-xl md:text-3xl rounded-md text-black text-center`;
        h1.className = msgClasse;
        h1.textContent = mensagens[msgIndex];
    }
    else if (e === 'dados-apagados') {
        msgIndex = 4;
        const msgClasse = `item ${cores[msgIndex]} p-4 sm:p-5 md:p-5 lg:p-8 transform cursor-pointer transition duration-500 text-xl md:text-3xl text-center rounded-md text-black`;
        h1.className = msgClasse;
        h1.textContent = mensagens[msgIndex];
    }
    else if (e === 'erro') {
        msgIndex = 5;
        const msgClasse = `item ${cores[msgIndex]} p-4 sm:p-5 md:p-5 lg:p-8 transform cursor-pointer transition duration-500 text-xl md:text-3xl text-center rounded-md text-black`;
        h1.className = msgClasse;
        h1.textContent = mensagens[msgIndex];
    }

    div.querySelectorAll('.item').forEach((item, i) => {
        setTimeout(() => {
            item.classList.add('translate-x-[150%]');
            setTimeout(() => {
                item.remove();
            }, 800)
        }, 3000 + i * 900)
    })

}