const audios = ['logo-audio',
    'showcase-1',
    'showcase-2',
    'showcase-3'];

function playAudio(audioId) {
    pauseOtherAudios(audioId);
    console.log(audioId);
    var audio = document.getElementById(audioId);
    audio.volume = 0.5;
    audio.currentTime = 0;
    audio.play();
    console.log("playing")
}

function pauseOtherAudios(audioId) {
    for (let i = 0; i < audios.length; i++) {
        if (audios[i] != audioId) {
            var audio = document.getElementById(audios[i]);
            audio.pause();
        }
    }
}
