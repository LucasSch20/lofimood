let player = document.querySelector('.player')
let noplayer = document.querySelector('.no-player')
let mainframe = document.querySelector('.main-frame')

noplayer.addEventListener('mouseenter', function() {
    player.style.display = 'block';
    noplayer.style.display = 'none';
})
mainframe.addEventListener('mouseover', function() {
    noplayer.style.display = 'block';
    player.style.display = 'none';
})