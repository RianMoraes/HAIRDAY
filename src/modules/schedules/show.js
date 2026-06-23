import dayjs from "dayjs";

//seleciona as seções manhã, tarde e noite
const periodMorning = document.getElementById('period-morning');
const periodAfternoon = document.getElementById('period-afternoon');
const periodNight = document.getElementById('period-night');

export function schedulesShow( { dailySchedules } ) {
    try{
        //limpa as seções de agendamentos
        periodMorning.innerHTML = '';
        periodAfternoon.innerHTML = '';
        periodNight.innerHTML = '';

        //renderiza os agendamentos do dia por periodo
        dailySchedules.forEach((schedule) =>{
            const item = document.createElement('li');
            const time = document.createElement('strong');
            const name = document.createElement('span');

            //adiciona o id do agendament
            item.setAttribute('data-id', schedule.id);

            time.textContent = dayjs(schedule.when).format('HH:mm');
            name.textContent = schedule.name;

            //cria icone de cancelar agendamento
            const cancelIcon = document.createElement('img');
            cancelIcon.classList.add('cancel-icon');
            cancelIcon.setAttribute('src', './src/assets/cancel.svg');
            cancelIcon.setAttribute('alt', 'Cancelar agendamento');

            //adiciona tempo, nome e icone no item
            item.append(time, name, cancelIcon);

            //obtem somente a hora
            const hour = dayjs(schedule.when).hour();

            //renderiza o agendamento na seção (manhã, tarde ou noite)
            if(hour <= 12){
                periodMorning.appendChild(item);
            } else if(hour > 12 && hour <= 18){
                periodAfternoon.appendChild(item);
            } else {
                periodNight.appendChild(item);
            }


        })

    } catch (error) {
    alert('Não foi possível exibir os agendamentos do dia selecionado');
    console.log(error);
    }
}