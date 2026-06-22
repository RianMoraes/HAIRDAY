import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');
const clientName = document.getElementById('client');

// Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual e a data minima no input de data
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
    //previne o comportamento padrão do formulário, que é enviar os dados e recarregar a página 
    event.preventDefault();

    try {
        //recuperando o nome do cliente e removendo os espaços em branco no início e no final
        const name = clientName.value.trim();

        if (!name) {
            return alert('Por favor, insira o nome do cliente');
        }

        //recupera o horario selecionado
        const hourSelected = document.querySelector('.hour-selected');

        //recupera o horario selecionado
        if (!hourSelected) {
            return alert('Por favor, selecione um horário');
        }

        //recupera somente a hora
        const [hour]= hourSelected.innerText.split(':');

        //insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, 'hour');

        //gera um ID
        const id = new Date().getTime();

        console.log({
            id,
            name,
            when
        })


    } catch (error) {
        alert('nao foi possivel realizar o agendamento, tente novamente mais tarde');
        console.error(error);
    }


}