// Redirect from heart to balloons page
function goToBalloons() {
    window.location.href = "/balloons";
}

// Generate full-screen balloons instantly
function generateNormalBalloons() {
    let container = document.getElementById("balloon-container");

    for (let i = 0; i < 30; i++) { // More balloons
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 90 + "vw";
        balloon.style.animationDuration = "10s";
        container.appendChild(balloon);
    }

    setTimeout(() => {
        window.location.href = "/wishes";
    }, 10000);
}

// Ensure scrolling emoji only appears on /wishes
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname === "/wishes") {
        let emojiContainer = document.getElementById("scrolling-emoji");
        if (!emojiContainer) {
            emojiContainer = document.createElement("div");
            emojiContainer.id = "scrolling-emoji";
            emojiContainer.innerHTML = "🎈✨💖"; // You can change emojis here
            document.body.appendChild(emojiContainer);
        }
    }
});

// Make the man walk and redirect to /quotes
function startScene() {
    generateNormalBalloons();
    setTimeout(() => {
        let man = document.getElementById("man-container");
        man.style.animation = "walk 5s linear forwards";

        setTimeout(() => {
            window.location.href = "/quotes";
        }, 5000);
    }, 3000);
}
