var tempo = new Date;
var agora;

tempo.getHours();

if (tempo.getHours() > 6 && tempo.getHours() < 18 ) {
    agora = 'day';
} else {
    agora = 'night';
}

