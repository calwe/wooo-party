window.onload = function() {
    const text = document.querySelector('.bouncing-text');
    const maxWidth = window.innerWidth - text.offsetWidth;
    const maxHeight = window.innerHeight - text.offsetHeight;

    let posX = Math.random() * maxWidth;
    let posY = Math.random() * maxHeight;
    let velocityX = 40 * (Math.random() - 0.5); // Random velocity in X direction
    let velocityY = 40 * (Math.random() - 0.5); // Random velocity in Y direction

    function moveText() {
        // Update position based on velocity
        posX += velocityX;
        posY += velocityY;

        // Reverse direction when reaching the screen edges
        if (posX <= 0 || posX >= maxWidth) {
            velocityX = -velocityX;
        }
        if (posY <= 0 || posY >= maxHeight) {
            velocityY = -velocityY;
        }

        // Apply the new position to the text element
        text.style.left = `${posX}px`;
        text.style.top = `${posY}px`;
    }

    setInterval(moveText, 10); // Update position every 10 milliseconds
};
