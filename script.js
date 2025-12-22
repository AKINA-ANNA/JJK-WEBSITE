const sounds = ['sound1', 'sound2', 'sound3'];

function playRandomSound() {
    // 1. Get a random index from the sounds array
    const randomIndex = Math.floor(Math.random() * sounds.length);

    // 2. Get the ID of the random sound
    const soundId = sounds[randomIndex];

    // 3. Get the audio element using its ID
    const audioPlayer = document.getElementById(soundId);

    // 4. Play the sound
    // Check if a sound is already playing and stop it before starting a new one
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        // If it's already playing, reset the time to 0 and play again (optional)
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    }
}