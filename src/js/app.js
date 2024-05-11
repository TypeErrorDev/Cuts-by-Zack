// sticky header
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction();
};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.scrollY > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// video scripts
const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('.video');
const playButton = videoPlayer.querySelector('.play-button');
const volume = videoPlayer.querySelector('.volume');
const currentTimeElement = videoPlayer.querySelector('.current');
const durationTimeElement = videoPlayer.querySelector('.duration');


// Play and pause buttons
playButton.addEventListener('click',(e)=>{
    if(video.paused){
        video.play()
        e.target.textContent = '❚ ❚'
    }else{
        video.pause();
        e.target.textContent = '►'
    }
})

// Volume
volume.addEventListener('mousemove', (e)=>{
    video.volume = e.target.value;
})

// Current time and duration
const currentTime = ()=>{
    let currentMinutes = Math.floor(video.currentTime / 60)
}