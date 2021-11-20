var hora = 0;
var minuto = 0;
var segundo = 0;

var tempo = 1000; //milésimos de segundo
var cron;

function iniciar(){
    cron = setInterval( () => {timer();}, tempo);
}

function pause(){
    clearInterval(cron);
}

function parar(){
    clearInterval(cron);
    hora = 0;
    minuto = 0;
    segundo = 0;
    var formatar = "00:00:00";
    document.getElementById('counter').innerText = formatar;
}

function timer(){
    segundo++;
    if(segundo == 60){
        segundo = 0;
        minuto++;

        if(minuto == 60){
            minuto = 0;
            hora++;
        }
    }

    var organizar = (segundo < 10 ? '0' + segundo : segundo) + ':' + (minuto < 10 ? '0' + minuto : minuto)+ ':' + (hora < 10 ? '0' + hora : hora);
    document.getElementById('counter').innerText = organizar;
}