
var play = document.querySelector('#play-btn');
var pause = document.querySelector('#pause-btn');
var music = document.querySelector('#audio')
var trackName = document.querySelector('#tn-text').InnerText;
var trackNum = 0;




//Funções do botões do player:

function playTrack() {
    play.style.display = 'none';
    pause.style.display = 'block';
    music.play();
}

function pauseTrack() {
    play.style.display = 'block';
    pause.style.display = 'none';
    music.pause();
}

function nextTrack() {

    playTrack();

    trackNum = trackNum + 1;

    music.src = trackList[trackNum].src;
    music.play()
}

function beforeTrack() {
    trackNum = trackNum - 1;

    trackName = trackList[trackNum].Name
    music.src = trackList[trackNum].src;
    music.play();
}
