
var play = document.querySelector('#play-btn');
var pause = document.querySelector('#pause-btn');
var randomTrackID = Math.floor((Math.random * 100) + 1);
var music = document.querySelector('#audio')
var trackName = document.querySelector('#tn-text').InnerText;

var playedTracks = [] //Array das musicas já tocadas. 


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

    var trackID = Math.floor(Math.random() * (2 - 0 + 1)) + 0;    
    playedTracks.push(trackID);

    music.src = trackList[trackID].src;
    music.play()
}

function beforeTrack() {
    var trackID = 'idk yet';

    trackName = trackList[trackID].Name
    music.src = trackList[trackID].src;
    music.play();
}

let trackinfo = {
    nome: 'Nome da Música',
    arquivo: ''
}