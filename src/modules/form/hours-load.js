import dayjs from 'dayjs';
import { openingHours } from "../../utils/opening-hours.js";

const hours = document.getElementById('hours');

export function hoursLoad({ date }) {
    const opening = openingHours.map(
        (hour) => {
            //recupera somente hora
            const [scheduleHour] = hour.split(':');

            //adiciona hora no date e verifica se está no passado
            const isHourPast = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs());
            return {
                hour,
                available: isHourPast
            }
        }
    )

    //renderiza os horarios
    opening.forEach(({ hour, available }) => {
        const li = document.createElement('li');

        li.classList.add('hour')
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour;
        hours.append(li);

    })


}
