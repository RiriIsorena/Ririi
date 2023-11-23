document.addEventListener("DOMContentLoaded", function () {
    animateMessage();
});

function animateMessage() {
    const loveMessage = document.getElementById("Message");

    setInterval(() => {
        Message.style.color = getRandomColor();
    }, 1000);
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
