function updateTime() {
    // Objeto da classe date
    var agora = new Date();
    var horario = problem(agora.getHours()) + ":" + problem(agora.getMinutes()) + ":" + problem(agora.getSeconds());

    // querySelector seleciona uma tag html
    var display = document.querySelector(".display");

    // a div display vai receber o conteudo horario
    display.textContent = horario;

}

function problem (numero) {
    if (numero < 10) {
        numero = "0" + numero;
    }
    return numero;
}

// começar o script chamando a função
updateTime();

// Funçao para atualizar a hora
setInterval(updateTime, 1000);
