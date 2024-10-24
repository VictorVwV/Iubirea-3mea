onload = () => {
    document.body.classList.remove("container");
};
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-button');

    // Check if audio is playing, if not, let button trigger the play event
    if (audio.paused) {
        playButton.style.display = 'block'; // Show the button
    } else {
        playButton.style.display = 'none'; // Hide the button if already playing
    }

    // Add click event listener to the button
    playButton.addEventListener('click', function () {
        audio.play().then(() => {
            playButton.style.display = 'none'; // Hide the button once song starts playing
        }).catch(error => {
            console.error('Playback failed: ', error);
        });
    });
});
