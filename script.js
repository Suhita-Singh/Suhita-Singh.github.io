console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex=0;
let index = 0; 
let audioElement=new Audio("Unstoppable(PagalWorld).mp3");
let masterPlay=document.getElementById("Play");
let myProgressBar=document.getElementById("myProgressBar");
let Song=Array.from(document.getElementsByClassName("item"));


let songs = [
    {songName: "Unstoppable-SIA", filePath: "Unstoppable(PagalWorld).mp3", coverPath: "unstop.jpg",duration:"4:06"},
    {songName: "Unholy", filePath: "Unholy(PaglaSongs).mp3", coverPath: "unholy.jpg",duration:"2:37"},
    {songName: "Let me love you-JUSTIN BIEBER", filePath: "Let-Me-Love-You(PaglaSongs).mp3", coverPath: "let_me_love_you.jpg",duration:"3:25"},
    {songName: "Kun faya kun-A.R. RAHMAN", filePath: "Kun Faaya Kun - Rockstar 128 Kbps.mp3", coverPath: "kun.jpg",duration:"7:53"},
    {songName: "Astronaut in the ocean-MASKED-WOLF", filePath: "Astronaut-In-The-Ocean(PaglaSongs).mp3", coverPath: "500x500.jpg",duration:"2:32"},
    {songName: "Aaoge jab tum", filePath: "Aaoge Jab Tum 128 Kbps.mp3", coverPath: "aaoge.jpg",duration:"5:57"},
    {songName: "Whatever-it-takes", filePath: "Whatever-It-Takes---Imagine-Dragons-(PagalWorld).mp3", coverPath: "whatever.jpg",duration:"3:39"},
    {songName: "In the stars", filePath: "In the Stars Song.mp3", coverPath: "stars.jpg",duration:"3:36"},

]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})


audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
  
    // Check if the duration is available and greater than 0
    if (audioElement.duration && audioElement.duration > 0) {
      const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
      console.log(progress);
      myProgressBar.value = progress;
    }
  });

  myProgressBar.addEventListener('input',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
  })

  Song.forEach((element,i)=>{
    
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("name")[0].innerText=songs[i].songName;

  })

const resetPlayButtons = () => {
    Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
    });
  };

  audioElement.addEventListener('ended', () => {
    resetPlayButtons(); 
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
  });

  const updateSongName = () => {
    const currentSongNameElement = document.getElementById('currentSongName');
    currentSongNameElement.textContent = songs[songIndex].songName;
  };
  
  Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
      resetPlayButtons(); 
      index = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
  
      if (audioElement.paused || index !== songIndex) {
        songIndex = index;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        updateSongName();
      } 
     
      else {
        audioElement.pause();
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
      }
    });
  });
  
  document.getElementById('next').addEventListener('click', () => {
    if (index >= 7) {
      index = 0;
    } else {
      index += 1;
    }
    audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  });
  document.getElementById('previous').addEventListener('click', () => {
    if (index <= 0) {
      index = 7;
    } else {
      index -= 1;
    }
    audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  });
