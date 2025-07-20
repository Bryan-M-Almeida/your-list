/* Constantes */
const form = document.querySelector('#form');
const input = document.querySelector('#input-tarefa');
const ul = document.querySelector('#tarefas');
const container = document.querySelector('#tarefas-container');
const options = document.querySelector('#options');
const formEditar = document.querySelector('#editar');
const fecharEditor = document.querySelector('#fechar-menu');

/* Dados */
const tarefasDados = JSON.parse(localStorage.getItem('tarefas')) || [];
let listaDeTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let feitas = JSON.parse(localStorage.getItem('feitas')) || 0;
console.log(feitas)
/* Insere tarefas */
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const texto = input.value.trim();
    if (texto === '') { notificar('erro'); return; };
    listaDeTarefas.push(texto);
    notificar('salvo')
    localStorage.setItem('tarefas', JSON.stringify(listaDeTarefas));

    renderizar();
    input.value = ''
})

/* Edita tarefas */
formEditar.addEventListener('submit', (e) => {
    e.preventDefault();
    notificar('editado')
    formEditar.classList.toggle('hidden')
})

/* Renderiza lista */
function renderizar() {
    if (listaDeTarefas.length < 1) {
        container.classList.add('hidden')
    } else {
        container.classList.remove('hidden')
    }
    ul.innerHTML = '';
    listaDeTarefas.forEach((tarefa, index) => {
        const label = document.createElement('label');
        const inputCheck = document.createElement('input');
        const span = document.createElement('span');
        const tarefaCheck = document.createElement('span');
        const div = document.createElement('div');
        const deletar = document.createElement('button');
        const editar = document.createElement('button');

        ul.className = 'w-[100%]'
        inputCheck.type = 'checkbox';
        inputCheck.className = 'hidden peer';
        label.className = 'flex items-center gap-2 justify-between mx-5';
        span.className = 'w-5 h-5 rounded-full border-2 border-red-500 peer-checked:bg-red-500 transition cursor-pointer';
        tarefaCheck.className = 'text-2xl cursor-pointer'
        div.className = 'flex gap-1'
        deletar.className = 'bg-red-500 px-1'
        deletar.textContent = 'Deletar';
        editar.className = 'bg-orange-500 px-1'
        editar.textContent = 'Editar';
        ul.appendChild(label);
        ul.appendChild(inputCheck);

        label.appendChild(inputCheck);
        label.appendChild(span);
        label.appendChild(tarefaCheck);
        label.appendChild(div)

        div.appendChild(deletar);
        div.appendChild(editar);
        deletar.addEventListener('click', () => {
            listaDeTarefas.splice(index, 1)
            localStorage.setItem('tarefas', JSON.stringify(listaDeTarefas));
            notificar('deletado')
            renderizar();
        })
        editar.addEventListener('click', () => {
            formEditar.classList.toggle('hidden')
        })
        tarefaCheck.textContent = tarefa;
        inputCheck.addEventListener('click', () => {
            tarefaCheck.classList.toggle('line-through');
            if (tarefaCheck.classList.contains('line-through')) {
                feitas++;
                localStorage.setItem('feitas', JSON.stringify(feitas));
                notificar('concluido')
            } else {
                feitas--;
                localStorage.setItem('feitas', JSON.stringify(feitas));
            }
        })
    })
}

renderizar();