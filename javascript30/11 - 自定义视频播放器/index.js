// 获取所有的页面元素
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
let progressBarflag = false

function videoplay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}


video.addEventListener('click',videoplay);
video.addEventListener('play',handleToggle);
video.addEventListener('pause',handleToggle);
video.addEventListener('timeupdate',progressBarUpdate);

function handleToggle(){
    let icon = video.paused ? '►' : '❚ ❚';
    toggle.innerText = icon;
}

toggle.addEventListener('click', videoplay)

function progressBarUpdate(){
    let percent = parseFloat(video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
}


progress.addEventListener('mousedown',(e)=>progressBarflag=true&&handleprogressBar(e));
document.addEventListener('mouseup',()=>progressBarflag=false);
progress.addEventListener('mousemove',(e)=>progressBarflag&&handleprogressBar(e));

let mouseflag = false;
ranges.forEach(item => item.addEventListener('click',handlePlayerSlider));
ranges.forEach(item => item.addEventListener('mousedown',() => mouseflag = true));
ranges.forEach(item => item.addEventListener('mouseup',() => mouseflag = false));
ranges.forEach(item => item.addEventListener('mousemove',(e) => mouseflag && handlePlayerSlider(e)));


function handleprogressBar(e){
        console.log(e);
        let offsetX = e.offsetX
        let width = progress.clientWidth
        console.log(offsetX);
        currentTime = (offsetX/width) * video.duration
        video.currentTime = currentTime
}


function handlePlayerSlider(e){
    video[e.target.name] = e.target.value;
}
