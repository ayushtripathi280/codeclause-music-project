// Get the audio element
const audioPlayer = document.getElementById('audio-player');

// Get custom controls
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');

// Add event listeners for custom controls
playBtn.addEventListener('click', () => {
    audioPlayer.play();
    playBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
});
