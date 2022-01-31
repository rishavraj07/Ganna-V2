console.log("Welcome to the gaan app .Enjoy Listining Varity of songs.");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems =document.getElementsByClassName('songItem');
let previous=document.getElementById('previous');
let next=document.getElementById('next');


let songItemPlay=document.getElementsByClassName('songItemPlay');


let songs=[
    {songName:"01 - Labon ko (Bhool Bhulaiyan) ", filePath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"02 - Abhi Kuch Dino Se", filePath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    {songName:"03 - Gall Goriye", filePath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    {songName:"04 - Galliyan", filePath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    {songName:"05 - Ghoomar - Padmavati", filePath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    {songName:"06 - Hamari Adhuri Kahani", filePath:"songs/6.mp3", coverpath:"covers/6.jpg"},
    {songName:"07 - Katra Katra ( Alone)", filePath:"songs/7.mp3", coverpath:"covers/7.jpg"},
    {songName:"08 - Khamoshiyan - Khamoshiyan", filePath:"songs/8.mp3", coverpath:"covers/8.jpg"},
    {songName:"09 - Tu Jo Hain (Mr. X)", filePath:"songs/9.mp3", coverpath:"covers/9.jpg"},
    {songName:"10 - Tum Se - Jalebi", filePath:"songs/10.mp3", coverpath:"covers/10.jpg"},
    {songName:"11 - Dil Mein Ho Tum", filePath:"songs/11.mp3", coverpath:"covers/11.jpg"},
    {songName:"12 - Awaara (Alone)", filePath:"songs/12.mp3", coverpath:"covers/12.jpg"},
    {songName:"13 - Humnava.", filePath:"songs/13.mp3", coverpath:"covers/13.jpg"},
    {songName:"14 - Pal - Jalebi - Arijit Singh", filePath:"songs/14.mp3", coverpath:"covers/14.jpg"},
]

Array.from(songItems).forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


//Handling the play and Pause on the Browser.
masterPlay.addEventListener('click',function(e){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    let progress =(audioElement.currentTime/audioElement.duration)* 100; 
    // console.log(progress);
    // console.log(audioElement.currentTime);
    myProgressBar.value = progress;
    duration.innerText=`${parseInt(audioElement.duration/60)}:${parseInt(audioElement.duration%60)}`;
    timeUpdate.innerText=`${parseInt(audioElement.currentTime/60)}:${parseInt(audioElement.currentTime%60)}`;
})


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

const makeInitilColor = ()=>{
    Array.from(songItemPlay).forEach((element)=>{
        element.parentNode.parentNode.parentNode.style.backgroundColor='rgb(0, 199, 199)';
    })
}

Array.from(songItemPlay).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
            makeAllPlays();
            makeInitilColor();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            e.target.parentNode.parentNode.parentNode.style.backgroundColor='rgb(0 0 0 / 71%)';
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            bottomImg.src=`covers/${songIndex+1}.jpg`;
            bannerImg.src=`covers/${songIndex+1}.jpg`;
            audioElement.currentTime = 0;
            document.getElementById('timeUpdate').innerText=audioElement.currentTime;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        
    })
})
next.addEventListener('click', (e)=>{
    if(songIndex>=13){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    bottomImg.src=`covers/${songIndex+1}.jpg`;
    bannerImg.src=`covers/${songIndex+1}.jpg`;
    audioElement.currentTime = 0;
    audioElement.play();
    // masterPlay.classList.remove('fa-play-circle');
    // masterPlay.classList.add('fa-pause-circle');
    document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
    document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
    document.getElementById(`${songIndex-1}`).classList.remove('fa-pause-circle');
    document.getElementById(`${songIndex-1}`).classList.add('fa-play-circle');
    makeInitilColor();
    document.getElementById(`${songIndex}`).parentNode.parentNode.parentNode.style.backgroundColor='rgb(238, 64, 44)';


})

previous.addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    bottomImg.src=`covers/${songIndex+1}.jpg`;
    bannerImg.src=`covers/${songIndex+1}.jpg`;
    audioElement.currentTime = 0;
    audioElement.play();
    // masterPlay.classList.remove('fa-play-circle');
    // masterPlay.classList.add('fa-pause-circle');
    document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
    document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
    document.getElementById(`${songIndex+1}`).classList.remove('fa-pause-circle');
    document.getElementById(`${songIndex+1}`).classList.add('fa-play-circle');
    makeInitilColor();
    document.getElementById(`${songIndex}`).parentNode.parentNode.parentNode.style.backgroundColor='rgb(238, 64, 44)';
})