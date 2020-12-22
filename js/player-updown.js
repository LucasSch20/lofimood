let player = document.querySelector('.player')
let noplayer = document.querySelector('.no-player')

noplayer.addEventListener('mouseenter', function() {
    player.style.display = 'block';
    noplayer.style.display = 'none';
})
player.addEventListener('mouseout', function() {
    noplayer.style.display = 'block';
    player.style.display = 'none';
})