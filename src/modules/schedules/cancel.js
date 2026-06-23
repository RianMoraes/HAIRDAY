import { schedulesDay } from './load.js'
import { scheduleCancel } from '../../services/schedule-cancel.js';

const periods = document.querySelectorAll('.period');

//gera evento de clique para cada lista (manha, tarde e noite)
periods.forEach(period => {
    //captura o evento de clique na lista
    period.addEventListener('click', async (event) => {
        //verifica se o elemento clicado é o ícone de cancelamento
        if (event.target.classList.contains('cancel-icon')) {
            //obtem a li pai do elemento clicado
            const item = event.target.closest('li');
            const { id } = item.dataset; //obtem o id do item a ser cancelado

            //verifica se o id existe e se foi selecionado
            if (id) {
                //confirma se o usuario quer cancelar o agendamento
                const isConfirm = confirm('Tem certeza que deseja cancelar este agendamento?');
                if (isConfirm) {
                    //envia uma requisição para o servidor para cancelar o agendamento
                    await scheduleCancel({ id });

                    //recarrega a lista de agendamentos
                     schedulesDay();
                }
            }
        }
    })
})