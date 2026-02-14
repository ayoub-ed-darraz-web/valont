const text = "Will you be my Valentine? ❤️";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 80);
    }
}

typingEffect();

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
    response.innerHTML = "I knew it 😍❤️ You're my favorite person in the world!";
    createHearts(30);
});

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * window.innerWidth + "px";
    noBtn.style.top = Math.random() * window.innerHeight + "px";
});

function createHearts(num) {
    for (let i = 0; i < num; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
// Floating particles background
function createParticles() {
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = Math.random() * 5 + 5 + "s";
        particle.style.opacity = Math.random();

        document.body.appendChild(particle);
    }
}

createParticles();
