import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = "videoplayer-current-time";


const onPlay = function({seconds}) {
    localStorage.setItem(currentTime, seconds)
};
// сохраняє там де був останій раз пройшовши 1 секунду
player.on('timeupdate', throttle(onPlay, 1000));


// після закривання або перезагрузки браузера повертає тебе на час де ти був раніше, 
// тому що ми поставили локал стордж який діє від верхньої функції,
// функція певіряє на назву локал стореджа, автоматично переводячи там все всередині і повертає нас
// на місце де ти був раніше
// дуже складний механізм там який я ще не можу пояснити як новачок :) 

player.setCurrentTime(localStorage.getItem(currentTime));

// дякую за перевірку. все що було вище це для мене, щоб було зрозуміло де що, коли повернуся назад до цієї задачі
