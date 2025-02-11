// Fix redirection from index to balloons
function goToBalloons() {
    window.location.href = "/balloons";
}

// Fix redirection from balloons to wishes
function generateHeartBalloons() {
    let container = document.getElementById("heart-balloon-container");
    for (let i = 0; i < 15; i++) {
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

// Fix redirection from wishes to quotes after man walks
function startScene() {
    generateBalloons();
    setTimeout(() => {
        document.getElementById("man-container").style.animation = "walk 5s linear forwards";
        setTimeout(() => {
            window.location.href = "/quotes";
        }, 5000);
    }, 3000);
}
