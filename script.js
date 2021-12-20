console.log("welcome to my music player <3");
let songIndex = 0;
let defaultSong = new Audio("/assets/songs/1.mp3");
let songItems = Array.from(document.getElementsByClassName("song"));
let nowPlaying = document.getElementById("nowPlaying");
let masterPlay = document.getElementById("masterPlay");
let recent = document.getElementById("recent");

let songs = [
  {
    artist: "Cartoon",
    songName: "On & On (feat. Daniel Levi)",
    filePath: "/assets/songs/1.mp3",
    coverPath: "/assets/covers/1.jpg",
  },
  {
    artist: "Janji",
    songName: "Heroes Tonight (feat. Johnning)",
    filePath: "/assets/songs/2.mp3",
    coverPath: "/assets/covers/2.jpg",
  },
  {
    artist: "DEAF KEV",
    songName: "Invincible [NCS Release]",
    filePath: "/assets/songs/3.mp3",
    coverPath: "/assets/covers/3.jpg",
  },
  {
    artist: "Different Heaven & EH!DE",
    songName: "My Heart [NCS Release]",
    filePath: "/assets/songs/4.mp3",
    coverPath: "/assets/covers/4.jpg",
  },
  {
    artist: "Disfigure",
    songName: "Blank [NCS Release]",
    filePath: "/assets/songs/5.mp3",
    coverPath: "/assets/covers/5.jpg",
  },
  {
    artist: "Elektronomia",
    songName: "Sky High [NCS Release]",
    filePath: "/assets/songs/6.mp3",
    coverPath: "/assets/covers/6.jpg",
  },
  {
    artist: "Warriyo",
    songName: "Mortals (feat. Laura Brehm) [NCS Release]",
    filePath: "/assets/songs/7.mp3",
    coverPath: "/assets/covers/7.jpg",
  },
  {
    artist: "Electro-Light",
    songName: "Symbolism [NCS Release]",
    filePath: "/assets/songs/8.mp3",
    coverPath: "/assets/covers/8.jpg",
  },
  {
    artist: "Cartoon",
    songName: "Why We Lose (feat. Coleman Trapp) [NCS Release]",
    filePath: "/assets/songs/9.mp3",
    coverPath: "/assets/covers/9.jpg",
  },
  {
    artist: "Tobu",
    songName: "Hope [NCS Release]",
    filePath: "/assets/songs/10.mp3",
    coverPath: "/assets/covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  element.getElementsByClassName("artist")[0].innerText = songs[i].artist;
});

// defaultSong.play();

masterPlay.addEventListener("click", () => {
  if (defaultSong.paused || defaultSong.currentTime <= 0) {
    defaultSong.play();
    masterPlay.src = '/assets/icons/pause-solid.svg';
  } else {
    defaultSong.pause();
    masterPlay.src = '/assets/icons/play-solid.svg';
  }
});

defaultSong.addEventListener("timeupdate", () => {
  // progress bar
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("play")).forEach((element) => {
    element.classList.add("playing");
  });
};

Array.from(document.getElementsByClassName("play")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    defaultSong.src = `/assets/songs/${songIndex + 1}.mp3`;
    nowPlaying.innerText = songs[songIndex].songName;
    cover = document.getElementById("cover");
    cover.src = `/assets/covers/${songIndex + 1}.jpg`;
    defaultSong.play();
    songItems.forEach((element, i) => {
      artist = document.getElementsByClassName("artistNow")[0];
      artist.innerText = songs[i].artist;
    });
  });
});

Array.from(document.getElementsByClassName('play')).forEach((element) => {
    element.src = '/assets/icons/play-solid.svg';
})