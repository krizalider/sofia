const button = document.querySelector(".move");

button.addEventListener("mouseenter", () => {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});