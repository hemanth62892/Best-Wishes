// Redirect from heart to balloons page
function goToBalloons() {
    window.location.href = "/balloons";
}

// Generate normal balloons with thread
function generateNormalBalloons() {
    let container = document.getElementById("balloon-container");

    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 90 + "vw"; // Spread balloons across width
        balloon.style.animationDuration = (Math.random() * 3 + 7) + "s"; // Random duration between 7-10s
        container.appendChild(balloon);
    }

    setTimeout(() => {
        window.location.href = "/wishes";
    }, 10000);
}

// Ensure scrolling emoji only appears once
document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("scrolling-emoji")) {
        let emojiContainer = document.createElement("div");
        emojiContainer.id = "scrolling-emoji";
        emojiContainer.innerHTML = "🎈✨💖"; // You can change emojis here
        document.body.appendChild(emojiContainer);
    }
});
