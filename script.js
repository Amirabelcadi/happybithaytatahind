
/* ============================= */
/* 1. NAVIGATION */
/* ============================= */

function openSection(sectionId) {

    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });

}

/* ============================= */
/* 2. OPEN THE LETTER */
/* ============================= */

function openLetter() {

    let envelope = document.getElementById("envelope");

    // Check if the envelope is already open

    if (envelope.classList.contains("open")) {
        return;
    }

    // Add the open class

    envelope.classList.add("open");

}

/* ============================= */
/* 3. BLOW OUT THE CANDLES */
/* ============================= */

function blowCandles() {

    let cake = document.getElementById("cakeContainer");

    let message = document.getElementById("wishMessage");


    // Check if candles are already blown

    if (cake.classList.contains("blown")) {
        return;
    }


    // Turn off the candles

    cake.classList.add("blown");


    // Display birthday message

    message.textContent = "Mögen all deine Wünsche in Erfüllung gehen! ✨";


    // Create golden sparkles

    for (let i = 0; i < 30; i++) {

        let sparkle = document.createElement("span");

        sparkle.textContent = "✦";

        sparkle.style.position = "fixed";

        sparkle.style.left = Math.random() * 100 + "vw";

        sparkle.style.top = Math.random() * 80 + "vh";

        sparkle.style.color = "#f1d18a";

        sparkle.style.fontSize = "20px";

        sparkle.style.pointerEvents = "none";

        sparkle.style.zIndex = "1000";


        // Add sparkle to the page

        document.body.appendChild(sparkle);


        // Remove sparkle after 2 seconds

        setTimeout(function() {

            sparkle.remove();

        }, 2000);

    }

}
/* BACKGROUND MUSIC */

function toggleMusic() {
    let music = document.getElementById("birthdayMusic");
    let button = document.getElementById("musicButton");

    if (music.paused) {
        music.play();
        button.textContent = "🔇 Pause Music";
    } else {
        music.pause();
        button.textContent = "🎵 Play Music";
    }
}

/* GOLDEN FALLING PARTICLES */

function createParticle() {
    let container = document.getElementById("particles");
    let particle = document.createElement("span");

    particle.className = "particle";
    particle.textContent = "✦";

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.fontSize = (10 + Math.random() * 15) + "px";
    particle.style.animationDuration = (4 + Math.random() * 5) + "s";

    container.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 9000);
}

setInterval(createParticle, 300);