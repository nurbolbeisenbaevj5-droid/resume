const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "⏸️";
    } else {
        music.pause();
        musicBtn.textContent = "▶️";
    }
});