const sounds = ['sound1', 'sound2', 'sound3'];

function playRandomSound() {
    // 1. Stop any audio that might be playing
    sounds.forEach(id => {
        const audio = document.getElementById(id);
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0; // reset to start
        }
    });

    // 2. Get a random index from the sounds array
    const randomIndex = Math.floor(Math.random() * sounds.length);

    // 3. Get the ID of the random sound
    const soundId = sounds[randomIndex];

    // 4. Get the audio element using its ID
    const audioPlayer = document.getElementById(soundId);

    // 5. Play the chosen sound
    audioPlayer.play();
}