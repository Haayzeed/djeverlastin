var songs = ["dj-everlasting-mix-tape-chill-teaser-1.mp3", "dj-everlasting-the-unveiling.mp3", "dj-everlasting-mix-tape-chill-teaser-2.mp3", "new-mixtape.mp3"];
var songTitle = document.getElementById('songTitle');

var song = new Audio();
var currentSong = 0;

window.onload = loadSong;

function loadSong () {
	song.src = "music/" + songs[currentSong];
	songTitle.textContent = ((currentSong + 1) + ". " + songs[currentSong]).substring(0, 15) + '...';
	song.playbackRate = 1;
	song.volume = 0.8;
	// song.play();
}

function playOrPauseSong (img) {
	song.playbackRate = 1;
	if(song.paused){
		song.play();
		img.src = "images/pause.png";
	}else{
		song.pause();
		img.src = "images/play.png";
	}
}

function next(){
	currentSong++;
	currentSong = currentSong % songs.length;
	loadSong();
	song.play();
}

function previous () {
	currentSong--;
	currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
	loadSong();
	song.play();
}

function increasePlaybackRate () {
	songs.playbackRate += 0.5;
}

function decreasePlaybackRate () {
	songs.playbackRate -= 0.5;
}