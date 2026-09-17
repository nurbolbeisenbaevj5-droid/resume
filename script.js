function openInvitation() {

    document.getElementById("invitation")
    .classList.add("show");

    const music = document.getElementById("music");
    music.play();

    document.querySelector(".play-btn").innerHTML = "⏸";

    setTimeout( () => {
        document.getElementById("invitation") 
        .scrollIntoView({
            behavior:"smooth"
        });
    }, 400);
}

function toggleMusic() {

const music = document.getElementById("music");
const btn = document.querySelector(".play-btn");

if (music.paused) {
    music.play();
    btn.textContent = "⏸";
} else {
    music.pause();
    btn.textContent = "▶";
}

}

window.onload = () => {
    const btn = document.querySelector(".play-btn");
    btn.innerHTML = "⏸";
};

const weddingDate = new Date ("October 4, 2026 18:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if(distance <= 0) {
        document.getElementById("days").textContent = 0;
        document.getElementById("hours").textContent = 0;
        document.getElementById("minutes").textContent = 0;
        document.getElementById("seconds").textContent = 0;
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000*60*60));

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );
    
document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

}, 1000);