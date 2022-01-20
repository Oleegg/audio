import { music1 } from "./music.js";

let isPlay = false;
let playNum = 0;


const audiofile = document.querySelector('.audio')
const btnPrev = document.querySelector('.btn-prev')
const btnPlay = document.querySelector('.btn-play')
const btnNext = document.querySelector('.btn-next')
const btnStop = document.querySelector('.btn-stop')
const progress = document.querySelector('.progress')
const volumeInput = document.querySelector('.volume')



btnPlay.addEventListener('click', changePlaying)
btnStop.addEventListener('click', stopAudio)
btnNext.addEventListener('click', playNext)
btnPrev.addEventListener('click', playPrev)
volumeInput.addEventListener('input', changVvolume)

function changePlaying() {
    console.log(isPlay);
    if (!isPlay) {
        audiofile.play()
        isPlay = true
    } else {
        audiofile.pause();
        isPlay = false
    }
}

function stopAudio() {
    audiofile.pause();
    audiofile.currentTime = 0;
    isPlay = false;
}
function playNext() {
    isPlay = false;
    playNum++
    if (playNum > music1.length - 1) {
        playNum = 0
    }
    audiofile.src = music1.filter((el, index) => index == playNum)
    changePlaying()
}
function playPrev() {
    isPlay = false;
    playNum--
    if (playNum < 0) {
        playNum = music1.length - 1
    }
    audiofile.src = music1.filter((el, index) => index == playNum)
    changePlaying()
}
function changVvolume() {
    let v = volumeInput.value
    audiofile.volume = v / 100
}
