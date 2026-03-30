const songs = {
  happy: [
    { name: "Vaathi Coming", 
    file: "Vaathi-Coming-MassTamilan.io.mp3" },
    { name: "Arabic Kuthu",
    file: "Arabic-Kuthu---Halamithi-Habibo-MassTamilan.so.mp3" }
  ],
  sad: [
    { name: "Why This Kolaveri", 
        
    file: "Why This Kolaveri Di - The Soup Of Love(PagaiWorld.com).mp3" }
  ],
  chill: [
    { name: "Munbe Vaa", 
    file: "Munbe Vaa(PagaiWorld.com).mp3" }
  ],
  energy: [
    { name: "Aaluma Doluma", 
        
    file: "Aaluma Doluma.mp3" }
  ]
};

let currentSongs = [];
let playlist = [];

// 🎭 Load mood songs
function loadSongs(mood) {
  const list = document.getElementById("songList");
  list.innerHTML = "";
  currentSongs = songs[mood];

  currentSongs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.name;

    li.onclick = () => playSong(song.file);

    const btn = document.createElement("button");
    btn.onclick = (e) => {
      e.stopPropagation();
      addToPlaylist(song);
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

// ▶️ Play song
function playSong(file) {
  const player = document.getElementById("player");
  player.src = file;
  player.play();
}

// 🔍 Search
function searchSongs() {
  const input = document.getElementById("search").value.toLowerCase();
  const list = document.getElementById("songList");

  list.innerHTML = "";

  currentSongs
    .filter(song => song.name.toLowerCase().includes(input))
    .forEach(song => {
      const li = document.createElement("li");
      li.textContent = song.name;
      li.onclick = () => playSong(song.file);
      list.appendChild(li);
    });
}

// 🎧 Playlist
function addToPlaylist(song) {
  playlist.push(song);
  renderPlaylist();
}

function renderPlaylist() {
  const list = document.getElementById("playlist");
  list.innerHTML = "";

  playlist.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.name;
    li.onclick = () => playSong(song.file);
    list.appendChild(li);
  });
}


function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}