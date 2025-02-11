function goToBalloons() {
    window.location.href = "/balloons";
}

function showMessage() {
    generateBalloons();
    setTimeout(() => {
        window.location.href = "/wishes";
    }, 5000);
}

function generateBalloons() {
    let container = document.getElementById("balloon-container");
    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = (Math.random() * 3 + 2) + "s";
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random colors
        container.appendChild(balloon);
    }
}
