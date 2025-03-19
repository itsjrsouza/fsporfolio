const hoverImages = {
    "icon-1": "./assets/LinkedinLogo-hover.svg",
    "icon-2": "./assets/InstagramLogo-hover.svg",
    "icon-3": "./assets/GithubLogo-hover.svg",
    "icon-4": "./assets/EnvelopeSimple-hover.svg"
};

document.querySelectorAll('.contacts .contact figure').forEach(figure => {
    const icon = figure.querySelector('img[class^="icon-"]');
    if (!icon) return;

    const originalSrc = icon.src;
    const hoverSrc = hoverImages[icon.classList[0]];

    figure.addEventListener("mouseover", () => {
        icon.src = hoverSrc;
    });

    figure.addEventListener("mouseout", () => {
        icon.src = originalSrc;
    });
});
