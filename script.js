const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function flashColor() {
    const color = getRandomColor();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}

canvas.addEventListener("click", flashColor);

// Start with a blank color
flashColor();