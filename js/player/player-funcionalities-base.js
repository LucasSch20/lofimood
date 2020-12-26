
var play = document.querySelector('#play-btn');
var pause = document.querySelector('#pause-btn');
var music = document.querySelector('#audio')
var trackName = document.querySelector('#tn-text');
var trackNum = 0;

//Eventos importantes:

music.addEventListener('ended', function() {nextTrack()});;


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
    trackNum = trackNum + 1;

    music.src = trackList[trackNum].src;
    trackName.innerHTML = trackList[trackNum].name;
    playTrack();
}

function beforeTrack() {
    trackNum = trackNum - 1;

    music.src = trackList[trackNum].src;
    trackName.innerHTML = trackList[trackNum].name;
    playTrack();
}
