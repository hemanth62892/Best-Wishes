// Redirect from heart to balloons page
function goToBalloons() {
    window.location.href = "/balloons";
}

// Generate normal balloons (no heart shape)
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
