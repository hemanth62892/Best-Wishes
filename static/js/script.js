// Redirect from heart to balloons page
function goToBalloons() {
    window.location.href = "/balloons";
}

// Generate full-screen balloons instantly & continuously for 10s
function generateNormalBalloons() {
    let container = document.getElementById("balloon-container");

    for (let i = 0; i < 30; i++) { // More balloons
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");

        // Random position & colors
        balloon.style.left = Math.random() * 90 + "vw";
        balloon.style.animationDuration = (7 + Math.random() * 3) + "s"; // 7-10s duration
        balloon.style.backgroundColor = getRandomColor();

        container.appendChild(balloon);
    }

    setTimeout(() => {
        window.location.href = "/wishes";
    }, 10000);
}

// Function to get a random balloon color
function getRandomColor() {
    const colors = ["red", "blue", "yellow", "green", "purple", "orange", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Ensure scrolling emoji only appears on /wishes
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname === "/wishes") {
        let emojiContainer = document.getElementById("scrolling-emoji");
        if (!emojiContainer) {
            emojiContainer = document.createElement("img");
            emojiContainer.id = "scrolling-emoji";
            emojiContainer.src = "/static/emoji.png"; // Use emoji image
            emojiContainer.alt = "Scrolling Emoji";
            document.body.appendChild(emojiContainer);
        }

        // Scroll emoji for 4 seconds, then redirect
        startEmojiScroll();
    }
});

// Scroll emoji once for 4s, then redirect to /quotes
function startEmojiScroll() {
    let emoji = document.getElementById("scrolling-emoji");
    emoji.style.animation = "scroll-emoji 4s linear forwards"; // Scrolls once

    setTimeout(() => {
        window.location.href = "/quotes";
    }, 4000);
}

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
