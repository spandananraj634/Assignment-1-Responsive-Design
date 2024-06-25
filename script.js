document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play-button');
    const audioPlayer = document.getElementById('audio-player');
    const songInfo = document.getElementById('song-info');

    playButton.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.src = './pause.png';  // Change to pause icon
            playButton.style.width = '30px';  // Set width
            playButton.style.height = '30px'; // Set height
        } else {
            audioPlayer.pause();
            playButton.src = './Music Player Options.png';  // Change back to play icon
            playButton.style.width = '500px';  // Set width
            playButton.style.height = '50px'; // Set height
        }
    });

    audioPlayer.addEventListener('play', function () {
        songInfo.textContent = 'Playing: Dreaming On - NEFFEX';
    });

    audioPlayer.addEventListener('pause', function () {
        songInfo.textContent = 'Paused: Dreaming On - NEFFEX';
    });

    
});
