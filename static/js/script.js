function generateHeartBalloons() {
    let container = document.getElementById("heart-balloon-container");
    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = (Math.sin(i) * 50 + 50) + "vw"; 
        balloon.style.top = (Math.cos(i) * 50 + 50) + "vh"; 
        container.appendChild(balloon);
    }
    setTimeout(() => {
        window.location.href = "/wishes";
    }, 5000);
}

function startScene() {
    generateBalloons();
    setTimeout(() => {
        document.getElementById("man-container").style.animation = "walk 5s linear forwards";
        setTimeout(() => {
            window.location.href = "/quotes";
        }, 5000);
    }, 3000);
}

