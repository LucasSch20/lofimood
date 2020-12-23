let player = document.querySelector('.player')
let noplayer = document.querySelector('.no-player')
let header = document.querySelector('header')

noplayer.addEventListener('mouseenter', function () {
    player.style.animationName = 'playerUp';
    player.style.animationDuration = '0.5s';
    player.style.animationFillMode = 'forwards';
    noplayer.style.display = 'none';
})

player.addEventListener('mouseleave', function () {
    player.style.animationName = 'playerDown';
    player.style.animationDuration = '0.5s';
    noplayer.style.display = 'block';
})
header.addEventListener('mouseenter', function() {
    player.style.animationName = 'playerDown';
    player.style.animationDuration = '0.5s';
    noplayer.style.display = 'block';
})

