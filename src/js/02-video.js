import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(VIDEO_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(VIDEO_KEY)) || 0);
