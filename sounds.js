const button = document.getElementById('funny-button');
const sounds = [
  new Howl({ src: ['sound1.mp3'] }),
  new Howl({ src: ['sound2.mp3'] }),
  new Howl({ src: ['sound3.mp3'] }),
  new Howl({ src: ['sound4.mp3'] }),
  new Howl({ src: ['sound5.mp3'] }),
  new Howl({ src: ['sound6.mp3'] }),
  new Howl({ src: ['sound7.mp3'] }),
  new Howl({ src: ['sound8.mp3'] }),
  new Howl({ src: ['sound9.mp3'] }),
  new Howl({ src: ['sound10.mp3'] }),
  new Howl({ src: ['sound11.mp3'] }),
  new Howl({ src: ['sound12.mp3'] }),
  new Howl({ src: ['sound13.mp3'] }),
  new Howl({ src: ['sound14.mp3'] }),
  new Howl({ src: ['sound15.mp3'] }),
  new Howl({ src: ['sound16.mp3'] }),
  new Howl({ src: ['sound17.mp3'] }),
  new Howl({ src: ['sound18.mp3'] }),
  // Add more sounds as needed
];

button.addEventListener('click', () => {
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  randomSound.play();
});