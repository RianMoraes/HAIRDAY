const periods = document.querySelectorAll('.period');

//gera evento de clique para cada lista (manha, tarde e noite)
periods.forEach(period => {
    //captura o evento de clique na lista
    period.addEventListener('click', (event) => {
        //verifica se o elemento clicado é o ícone de cancelamento
        if(event.target.classList.contains('cancel-icon')){
            //obtem a li pai do elemento clicado
            const item = event.target.closest('li');
            const { id } = item.dataset; //obtem o id do item a ser cancelado
            
            if(id){
                const isConfirm = confirm('Tem certeza que deseja cancelar este agendamento?');
                if(isConfirm){
                    //envia uma requisição para o servidor para cancelar o agendamento
                    console.log('remover')
                }
            }
        }
    })
})