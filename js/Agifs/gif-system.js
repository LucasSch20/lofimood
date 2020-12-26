var frame = document.querySelector('.main-frame');
var currentGIF = 0;
if (agora == 'day'){
    frame.style.backgroundImage = gifListDay[0].src;
} else {
    frame.style.backgroundImage = gifListNight[0].src;
}

window.setInterval(function(){
    currentGIF =  currentGIF + 1;

    if (agora == 'day'){
        frame.style.backgroundImage = gifListDay[currentGIF].src;
    } else {
        frame.style.backgroundImage = gifListNight[currentGIF].src;
    }
}, 300000);