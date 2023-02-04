console.log('hello');

// Initiliaze The Variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let musicBar = document.getElementById('musicBar');
let playingSongName = document.getElementById('playingSongName');

let songs = [{
        songName: "Gurenge - Lisa | Demon Slayer",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg"
    },
    {
        songName: "Unlasting - Lisa | Sword Art Online",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg"
    },
    {
        songName: "Shock - Mari | Attack On Titan",
        filePath: "songs/3.mp3",
        coverPath: "covers/3.jpg"
    },
    {
        songName: "Inferno - Mrs.Green | Fire Force",
        filePath: "songs/4.mp3",
        coverPath: "covers/4.jpg"
    },
    {
        songName: "A Child of Evil - Ai | Attack On Titan",
        filePath: "songs/5.mp3",
        coverPath: "covers/5.jpg"
    },
    {
        songName: "Tanjiro No Uta - Akano | Demon Slayer",
        filePath: "songs/6.mp3",
        coverPath: "covers/6.jpg"
    },
    {
        songName: "Rumbling - SiM | Attack On Titan",
        filePath: "songs/7.mp3",
        coverPath: "covers/7.jpg"
    },
    {
        songName: "Unravel - Toru | Tokyo Ghoul",
        filePath: "songs/8.mp3",
        coverPath: "covers/8.jpg"
    },
    {
        songName: "Black Catcher - Vickeblanka | Black Cloverr",
        filePath: "songs/9.mp3",
        coverPath: "covers/9.jpg"
    }
]

// Conrtols Function
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        musicBar.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        musicBar.style.opacity = 0;
    }
})

//  Adding Event Listner
audioElement.addEventListener('timeupdate', ()=> {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playBtn')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('playBtn')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        playingSongName.innerText = songs[songIndex].songName;        
        audioElement.currentTime = 0;
        audioElement.play();
        musicBar.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    playingSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    musicBar.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    playingSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    musicBar.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})