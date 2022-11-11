let keys = document.querySelectorAll('.key');
let sounds = document.querySelectorAll('.sound');
const keyMap = {
  0: 'KeyA',
  1: 'KeyS',
  2: 'KeyD',
  3: 'KeyF',
  4: 'KeyG',
  5: 'KeyH',
  6: 'KeyJ',
  7: 'KeyK',
  8: 'KeyL',
};
const audioMap = {
  4: new Audio('./sounds/boom.wav'),
  0: new Audio('./sounds/clap.wav'),
  1: new Audio('./sounds/hihat.wav'),
  2: new Audio('./sounds/kick.wav'),
  3: new Audio('./sounds/openhat.wav'),
  5: new Audio('./sounds/ride.wav'),
  6: new Audio('./sounds/snare.wav'),
  8: new Audio('./sounds/tink.wav'),
  7: new Audio('./sounds/tom.wav'),
};

document.addEventListener('keydown', a => {
  for (let i = 0; i < 9; i++) {
    if (a.code == keyMap[i]) {
      keys[i].classList.add('playing');
      audioMap[i].currentTime = 0;
      audioMap[i].play();
    }
  }
});
document.addEventListener('keyup', b => {
  for (let i = 0; i < 9; i++) {
    if (b.code == keyMap[i]) {
      keys[i].classList.remove('playing');
      // audioMap[i].pause();
    }
  }
});
