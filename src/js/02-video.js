const throttle = require('lodash.throttle');
import Vimeo from '@vimeo/player';
const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
const throttieOnTimeupdateLocal = throttle(onTimeupdateLocal, 1000);
function onTimeupdateLocal(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  console.log(e.seconds);
}
player.on('timeupdate', throttieOnTimeupdateLocal);
