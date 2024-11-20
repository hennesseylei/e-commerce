window.addEventListener("load", () => {
    const overlay = document.querySelector(".pageoverlay");
    const content = document.querySelector(".landingpage");

    setTimeout(() => {
        overlay.style.transform = "translateX(100%)";
        content.style.opacity = "1";
    }, 2000);
});