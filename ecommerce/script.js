function fadeOut() {
    var fadeTarget1 = document.querySelector(".pageoverlay");
    var fadeTarget2 = document.querySelector(".landingpage");
    var fadeEffect = setInterval(function() {
        if (!fadeTarget1.style.opacity > 0 && !fadeTarget2.style.opacity) {
            fadeTarget1.style.opacity = 1;
            fadeTarget2.style.opacity = 1;
        }
        if (fadeTarget1.style.opacity > 0 && fadeTarget2.style.opacity) {
            fadeTarget1.style.opacity -= 0.1;
            fadeTarget2.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

document.querySelector(".pageoverlay").addEventListener("click", fadeOut);
document.querySelector(".landingpage"),addEventListener("click", fadeOut);