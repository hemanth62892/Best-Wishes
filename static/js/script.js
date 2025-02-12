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
    emoji.style.animation = "scroll-emoji 10s linear forwards"; // Scrolls once

    setTimeout(() => {
        window.location.href = "/quotes";
    }, 12000);
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

// Function to play audio based on the current page
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.createElement("audio");
    audio.autoplay = true;
    audio.loop = true; // Loop the background music

    if (window.location.pathname === "/balloons") {
        audio.src = "/static/heartbeat.mp3"; // Play heartbeat.mp3 on /balloons
    } else if (window.location.pathname === "/wishes") {
        audio.src = "/static/music1.mp3"; // Play music1.mp3 on /wishes
    } else if (window.location.pathname === "/quotes") {
        audio.src = "/static/music2.mp3"; // Play music2.mp3 on /quotes
    }

    document.body.appendChild(audio); // Add the audio element to the page
});

// 🌟 Function to Generate Floating Hearts (Continuous & Bigger)
function generateHearts() {
    let container = document.createElement("div");  
    container.id = "floating-hearts";
    document.body.appendChild(container);

    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        // Random left position (spread across the screen)
        heart.style.left = Math.random() * 100 + "vw";

        // Random animation duration (slower for a smoother effect)
        heart.style.animationDuration = (8 + Math.random() * 5) + "s";

        // Slightly random size variation
        let randomSize = 45 + Math.random() * 20; // Between 45px - 65px
        heart.style.fontSize = randomSize + "px";

        container.appendChild(heart);

        // Remove after animation completes
        setTimeout(() => {
            heart.remove();
        }, 13000); // Slightly longer to avoid abrupt removal

    }, 300); // More frequent heart generation (every 0.3 seconds)
}

// 🌟 Call the function on every page
document.addEventListener("DOMContentLoaded", function () {
    generateHearts();
});
