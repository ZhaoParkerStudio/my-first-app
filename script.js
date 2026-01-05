const button = document.getElementById('changeColorBtn');
const body = document.body;
const greeting = document.getElementById('greeting');

const colors = ['#f0f2f5', '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff'];

button.addEventListener('click', () => {
    // Pick a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
    
    // Change the text
    greeting.textContent = "You clicked the button!";
});
