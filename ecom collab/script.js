window.addEventListener("load", () => {
    const overlay = document.querySelector(".pageoverlay");
    const content = document.querySelector(".landingpage");

    setTimeout(() => {
        pageoverlay.computedStyleMap.transform = "translateX(100%)";
        landingpage.computedStyleMap.opacity = "1";
    }, 500);
});