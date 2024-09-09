// All songs in an array
const songs = [
    document.getElementById('song1'),
    document.getElementById('song2'),
    document.getElementById('song3'),
    document.getElementById('song4'),
    document.getElementById('song5'),
    document.getElementById('song6'),
    document.getElementById('song7'),
    document.getElementById('song8'),
    document.getElementById('song9')
];

let currentSongIndex = 0;

// Play the current song
function playSong() {
    songs[currentSongIndex].play();
}

// Pause the current song
function pauseSong() {
    songs[currentSongIndex].pause();
}

// Play next song
function playNextSong() {
    songs[currentSongIndex].pause(); // Pause current song
    songs[currentSongIndex].currentTime = 0; // Reset time of the current song
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Increment index, loop back if needed
    playSong(); // Play the next song
}

// Play previous song
function playPrevSong() {
    songs[currentSongIndex].pause(); // Pause current song
    songs[currentSongIndex].currentTime = 0; // Reset time of the current song
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Decrement index, loop back if needed
    playSong(); // Play the previous song
}

// Event listeners for buttons
document.getElementById('footer-play-btn').addEventListener('click', playSong);
document.getElementById('footer-pause-btn').addEventListener('click', pauseSong);
document.getElementById('next-btn').addEventListener('click', playNextSong);
document.getElementById('prev-btn').addEventListener('click', playPrevSong);
