const music = document.getElementById('background-music');
const button = document.getElementById('toggle-music');
const icon = document.getElementById('speaker-icon');

button.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    icon.innerHTML = `
      <!-- Parlante Activo -->
      <path id="active-icon" d="M3 10v4h4l5 5V5L7 10H3zm13.54 2c0-.82-.4-1.54-1-2l1.42-1.42c.93.93 1.58 2.22 1.58 3.42s-.65 2.49-1.58 3.42L15.54 14c.6-.46 1-1.18 1-2zm3.46 0c0-2.1-1.28-3.92-3.11-4.68L18.89 7c2.19 1.01 3.11 3.27 3.11 5 0 1.73-.92 3.99-3.11 5l-1-1.32C18.72 15.92 20 14.1 20 12z"/>`;
  } else {
    music.pause();
    icon.innerHTML = `
      <!-- Parlante Inactivo -->
      <path id="inactive-icon" d="M3 10v4h4l5 5V5L7 10H3zm11.54-1.42L13.12 12l1.42 1.42 2.83 2.83-1.42 1.42-2.83-2.83-2.83 2.83-1.42-1.42 2.83-2.83-2.83-2.83 1.42-1.42 2.83 2.83 2.83-2.83z"/>`;
  }
});

const audioBtn = document.getElementById('play-music-btn');
audioBtn.addEventListener('click', function () {
  const audio = document.getElementById('background-music');
  if (audio.paused) {
      audio.play();
  } else {
      this.textContent = "Musica activada";
      audioBtn.style.opacity = 0.5;
      audioBtn.style.pointerEvents = "none"
  }
});
