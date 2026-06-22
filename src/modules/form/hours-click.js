export function hoursClick() {
    const hours = document.querySelectorAll('.hour-available');

    hours.forEach((available) => {
        available.addEventListener('click', (selected) => {
            
            //remove a classe de selecionado de todos os horarios antes de adicionar a classe no horario clicado
            hours.forEach((hour) => {
                hour.classList.remove('hour-selected');
            })
            //adiciona a classe na li clicada
            selected.target.classList.add('hour-selected');
        })
    })
}