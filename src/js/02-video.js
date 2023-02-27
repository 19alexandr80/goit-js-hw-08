import Vimeo from '@vimeo/player';
console.log(Vimeo);
const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);
console.log(localStorage.getItem('videoplayer-current-time'));
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
player.on('timeupdate', e => {
  //   console.log(e.seconds);
  localStorage.setItem('videoplayer-current-time', e.seconds);
});
