var frame = document.querySelector('.main-frame');
var gifListDayLenght = gifListDay.length - 1;
var gifListNightLenght = gifListNight.length - 1;
var currentGIF;

//If que decide se está de dia ou de noite:
if (agora == 'day') {
    currentGIF = Math.floor(Math.random() * (gifListDayLenght - 0 + 1)) + 0;
    frame.style.backgroundImage = gifListDay[currentGIF].src;

} else {
    currentGIF = Math.floor(Math.random() * (gifListNightLenght - 0 + 1)) + 0;
    frame.style.backgroundImage = gifListNight[currentGIF].src;
}

//Função setInterval que define o próximo gif a cada intervalo de tempo definido:
window.setInterval(function () {

    currentGIF = currentGIF + 1;

    maxGif();

    if (agora == 'day') {
        frame.style.backgroundImage = gifListDay[currentGIF].src;
    } else {
        frame.style.backgroundImage = gifListNight[currentGIF].src;
    }
}, 60000);


//definição da função do gif máximo de acordo com o horário do dia:
if (agora == 'day'){
    function maxGif() {
        if (currentGIF > gifListDayLenght) {
            currentGIF = 0;
            if (agora == 'day') {
                frame.style.backgroundImage = gifListDay[currentGIF].src;
            } else {
                frame.style.backgroundImage = gifListNight[currentGIF].src;
            }
        }
    }
} else {
    function maxGif() {
        if (currentGIF > gifListNightLenght) {
            currentGIF = 0;
            if (agora == 'day') {
                frame.style.backgroundImage = gifListDay[currentGIF].src;
            } else {
                frame.style.backgroundImage = gifListNight[currentGIF].src;
            }
        }
    }
}
