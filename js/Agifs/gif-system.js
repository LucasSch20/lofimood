var frame = document.querySelector('.main-frame');
var currentGIF = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
if (agora == 'day'){
    frame.style.backgroundImage = gifListDay[currentGIF].src;
} else {
    frame.style.backgroundImage = gifListNight[currentGIF].src;
}

window.setInterval(function(){
    currentGIF =  currentGIF + 1;

    if (agora == 'day'){
        frame.style.backgroundImage = gifListDay[currentGIF].src;
    } else {
        frame.style.backgroundImage = gifListNight[currentGIF].src;
    }
}, 180000);