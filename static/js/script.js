// Fix redirection from index to balloons
function goToBalloons() {
    window.location.href = "/balloons";
}

function generateHeartBalloons() {
    let container = document.getElementById("heart-balloon-container");

    for (let i = 0; i < 15; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 90 + "vw"; // Spread balloons across width
        balloon.style.animationDuration = (Math.random() * 2 + 5) + "s"; // Random duration between 5-7s
        container.appendChild(balloon);
    }

    setTimeout(() => {
        window.location.href = "/wishes";
    }, 7000);
}

