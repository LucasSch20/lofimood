
var play = document.querySelector('#play-btn');
var pause = document.querySelector('#pause-btn');
var music = document.querySelector('#audio')
var trackName = document.querySelector('#tn-text');
var credits = document.querySelector('#credit');
var creditsLink = document.querySelector('#credit-link');
var speaker =  document.querySelector('#speak-btn');
var mute = document.querySelector('#mute-btn');
var loopOn = document.querySelector('#loopOn-btn');
var loopOff = document.querySelector('#loopOff-btn');

var trackLenght = 3;

var trackNum = Math.floor(Math.random() * (trackLenght - 0 + 1)) + 0;



//Set inicial da música:

window.setTimeout(() => {
    music.src = trackList[trackNum].src;
    trackName.innerHTML = trackList[trackNum].name;

    credits.innerHTML = trackList[trackNum].credits;
    creditsLink.innerHTML = trackList[trackNum].creditsLink;
}, 1);


//Eventos importantes:

music.addEventListener('ended', function () { nextTrack() });;


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

    if (trackNum > trackLenght){
        trackNum = 0;
    } 

    credits.innerHTML = trackList[trackNum].credits;
    creditsLink.innerHTML = trackList[trackNum].creditsLink;

    music.src = trackList[trackNum].src;
    trackName.innerHTML = trackList[trackNum].name;
    playTrack();
}

function beforeTrack() {
    trackNum = trackNum - 1;

 
    if(trackNum < 0){
        trackNum = 0;
    }

    credits.innerHTML = trackList[trackNum].credits;
    creditsLink.innerHTML = trackList[trackNum].creditsLink;

    music.src = trackList[trackNum].src;
    trackName.innerHTML = trackList[trackNum].name;
    playTrack();
}

function muteTrack() {
    speaker.style.display = 'none';
    mute.style.display = 'block';
    music.volume = 0;
}
function unmuteTrack() {
    speaker.style.display = 'block';
    mute.style.display = 'none';
    music.volume = 1;
}

function loopTrackOn() {
    loopOn.style.display = 'block';
    loopOff.style.display = 'none'
    music.loop = true;
}
function loopTrackOff() {
    loopOn.style.display = 'none';
    loopOff.style.display = 'block'
    music.loop = false;
}