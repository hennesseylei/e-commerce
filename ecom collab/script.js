window.addEventListener("load", () => {
    const overlay = document.querySelector(".overlay");
    const content = document.querySelector(".landingpage");

    setTimeout(() => {
        overlay.computedStyleMap.transform = "translateX(100%)";
        landingpage.computedStyleMap.opacity = "1";
    }, 500);
});