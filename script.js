const text = "Will you be my Valentine? ❤️";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 60);
    }
}
typingEffect();

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");
const container = document.querySelector(".container");
const music = document.getElementById("loveMusic");

let yesScale = 1;

// 💓 NO يهرب و YES يكبر
noBtn.addEventListener("mouseover", () => {

    const maxX = container.clientWidth - noBtn.offsetWidth - 20;
    const maxY = container.clientHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;
});


// 💘 YES CLICK FINAL TRANSFORMATION
yesBtn.addEventListener("click", () => {

    music.play();

    document.body.classList.add("finalMode");

    container.innerHTML = `
    <h1>For My Love 💖</h1>
    <div class="big-heart">❤️</div>
    <p style="font-size:22px; margin-top:20px;">
        From the first moment until forever…  
        You are my happiness, my peace, my everything ❤️
    </p>
`;


    launchConfetti();
});


// 🎉 Confetti
function launchConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background =
            `hsl(${Math.random() * 360}, 100%, 70%)`;

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}


// ✨ Particles
function createParticles() {
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = Math.random() * 5 + 5 + "s";

        document.body.appendChild(particle);
    }
}
createParticles();
