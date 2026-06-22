import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate  = document.getElementById('date');

// Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual e a data minima no input de data
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event)=> {
    //previne o comportamento padrão do formulário, que é enviar os dados e recarregar a página 
    event.preventDefault();


}