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


    let slideTitle1 =
    document.getElementById("slide-title");
    let slideStats1 =
    document.getElementById("slide-stats");
    let nextSlideTitle =
    document.querySelectorAll(`[data-slide-stats="${slideId}"]`)[0].innerHTML;

    TweenLite.fromTo(slideTitle1, 0.5,
        {
            autoAlpha: 1,
            y: 0 },
        {
            autoAlpha: 0,
            y : 20,
            ease: "Expo.easeIn",
            onComplete: function () {
            slideTitle1.innerHTML = nextSlideTitle;

            TweenLite.to(slideTitle1, 0.5, {
                autoAlpha: 1,
                y: 0 
            });
            }
        }
    );