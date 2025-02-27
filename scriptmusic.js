// Music Player Logic
let audioPlayer = document.getElementById("audioPlayer");
let isPlaying = false;

function togglePause() {
  if (isPlaying) {
    audioPlayer.pause();
    isPlaying = false;
    document.getElementById("playPauseBtn").textContent = "▶️ Play"; // Tombol berubah menjadi Play
  } else {
    audioPlayer.play().catch(error => console.log("Autoplay Blocked: ", error));
    isPlaying = true;
    document.getElementById("playPauseBtn").textContent = "⏸ Pause"; // Tombol berubah menjadi Pause
  }
}

const playlist = [
  { title: "Imagination - Shawn Mendes", src: "https://cdn.jsdelivr.net/gh/ClaudiZiko/OnlyMee@main/Media/Music/Imagination%20-%20Shawn%20Mendes%20(lyrics).mp3" },
  { title: "Dandelions - Ruth B.", src: "https://cdn.jsdelivr.net/gh/ClaudiZiko/OnlyMee@main/Media/Music/Ruth%20B.%20-%20Dandelions%20(Lyrics).mp3" },
  { title: "Billie Eilish - BIRDS OF A FEATHER", src: "https://cdn.jsdelivr.net/gh/ClaudiZiko/OnlyMee@main/Media/Music/Billie%20Eilish%20-%20BIRDS%20OF%20A%20FEATHER.mp3" },
  { title: "Katy Perry - Unconditionally", src: "https://cdn.jsdelivr.net/gh/ClaudiZiko/OnlyMee@main/Media/Music/Katy%20Perry%20-%20Unconditionally%20(Lyrics).mp3" },
  { title: "Taylor Swift - Enchanted", src: "https://cdn.jsdelivr.net/gh/ClaudiZiko/OnlyMee@main/Media/Music/Taylor%20Swift%20-%20Enchanted.mp3" }
];

function loadPlaylist() {
  const playlistContainer = document.getElementById("playlist");
  playlistContainer.innerHTML = ""; // Bersihkan daftar sebelum menambah
  playlist.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = function() {
      playSong(index);
    };
    playlistContainer.appendChild(li);
  });
}

function playSong(index) {
  audioPlayer.src = playlist[index].src;
  audioPlayer.load(); // Memuat ulang audio
  audioPlayer.play().catch(error => console.log("Autoplay Blocked: ", error)); // Log error jika autoplay diblokir
  isPlaying = true;
  document.getElementById("playPauseBtn").textContent = "⏸ Pause"; // Tombol berubah menjadi Pause
}

// Cache query unik
playlist.forEach(song => {
  song.src += "?nocache=" + new Date().getTime();
});

// MUAT PLAYLIST SETELAH URL DIPERBAHARUI
loadPlaylist();

// Slideshow Logic
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Ganti gambar setiap 5 detik
}

showSlides(); // Jalankan slideshow saat halaman dimuat