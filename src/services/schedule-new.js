import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json" //indica que o corpo da requisição é um JSON, para o backend interpretar corretamente
            },
            body: JSON.stringify({ id, name, when })//serializar, passar na requisição como texto
        })

        alert('Agendamento realizado com sucesso!');
    } catch (error) {
        console.error(error);
        alert('Não foi possível criar o agendamento, tente novamente mais tarde');
    }
}       