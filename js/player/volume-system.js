var volumeItens = document.querySelector('#volume-itens')
var volumeIcon = document.querySelector('#volume-icon');
var volume = document.querySelector('#volume');


//Animação do Volume:
volumeItens.addEventListener('mouseenter', function() {
    volume.style.display = 'block';
    volume.style.animationName = 'volume';
    volume.style.animationDuration = '0.5s'
    volumeIcon.style.backgroundImage = "url('../itens/ico/volume\ claro.png')";
})

volumeItens.addEventListener('mouseleave', function() {
    volume.style.animationName = 'volumeClose';
    volume.style.animationDuration = '0.5s';
    volumeIcon.style.backgroundImage = "url('../itens/ico/volume\ escuro.png')";
    volume.style.display = 'none';

})

