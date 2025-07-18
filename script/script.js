const form = document.querySelector('#form');
const input = document.querySelector('#input-tarefa');
const ul = document.querySelector('#tarefas');
const options = document.querySelector('#options');

const tarefasDados = {
    baixa: {
        marcado: [],
        normal: []
    },
    media: {
        marcado: [],
        normal: []
    },
    alta: {
        marcado: [],
        normal: []
    }
}

/* const dados = {
    feitas: 0,
    deletadas: 0,
    tarefas: localStorage.getItem()
};

console.log(dadosFeitos); */

const tarefas = localStorage;
function salvar(local) {
    localStorage.setItem(local, JSON.stringify(tarefasDados[local].normal));
}

function renderizar() {
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    notificar('salvo');
    const importancia = options.value;

    const texto = input.value.trim();
    if (texto === '') return;

let feitas = 0;
    ul.innerHTML = '';

    tarefasDados[importancia].normal.push(texto);

    tarefasDados[importancia].normal.forEach((tarefa) => {
        salvar(importancia)
        const label = document.createElement('label');
        const inputCheck = document.createElement('input');
        const span = document.createElement('span');
        const tarefaCheck = document.createElement('span');

        inputCheck.type = 'checkbox';
        inputCheck.className = 'hidden peer';
        label.className = 'flex items-center gap-2 cursor-pointer';
        span.className = 'w-5 h-5 rounded-full border-2 border-red-500 peer-checked:bg-red-500 transition';
        tarefaCheck.className = 'text-2xl'

        ul.appendChild(label);
        ul.appendChild(inputCheck);

        label.appendChild(inputCheck);
        label.appendChild(span);
        label.appendChild(tarefaCheck);

        tarefaCheck.textContent = tarefa;

        inputCheck.addEventListener('click', () => {
            tarefaCheck.classList.toggle('line-through');
            if (tarefaCheck.classList.contains('line-through')) {
                feitas++;
                notificar('concluido')
            } else {
                feitas--;
            }
            console.log(feitas)
        })
    });
    input.value = '';

})
