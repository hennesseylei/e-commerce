window.addEventListener("load", () => {
    const overlay = document.querySelector(".pageoverlay");
    const content = document.querySelector(".landingpage");

    setTimeout(() => {
        overlay.style.transform = "0";
        content.style.opacity = "1";
    }, 2000);
});