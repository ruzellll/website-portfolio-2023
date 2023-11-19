const facebook = document.getElementById('facebook');
const github = document.getElementById('github');
const email = document.getElementById('email');

const facebookIcon = document.getElementById('facebookIcon');
const githubIcon = document.getElementById('githubIcon');
const emailIcon = document.getElementById('emailIcon');

facebook.addEventListener('click', function() {
  window.open('https://www.facebook.com/yuan.ortega.96', '_blank');
});
facebook.addEventListener('mouseenter', () => {
  facebook.style.backgroundColor = '#1877F2';
  facebookIcon.style.color = '#fff';
});
facebook.addEventListener('mouseleave', () => {
  facebook.style.backgroundColor = '';
  facebookIcon.style.color = '';
});

github.addEventListener('click', function() {
  window.open('https://github.com/ruzellll', '_blank');
});
github.addEventListener('mouseenter', () => {
  github.style.backgroundColor = '#4078c0';
  githubIcon.style.color = '#fff';
});
github.addEventListener('mouseleave', () => {
  github.style.backgroundColor = '';
  githubIcon.style.color = '';
});

email.addEventListener('click', function() {
  const emailCopy = 'ry.ortega25@gmail.com';

  navigator.clipboard.writeText(emailCopy)
    .then(() => {
      alert('Email copied to clipboard!');
    })
});
email.addEventListener('mouseenter', () => {
  email.style.backgroundColor = '#b62222';
  emailIcon.style.color = '#fff';
});
email.addEventListener('mouseleave', () => {
  email.style.backgroundColor = '';
  emailIcon.style.color = '';
});

const scrollButton = document.getElementById('scrollBtn');

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
 };

scrollButton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const progressBar = document.getElementById('progress-bar');

playBtn.addEventListener('click', () => {
    audioPlayer.play();
    audioPlayer.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
});

pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.pause();
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
});

stopBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
});

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

