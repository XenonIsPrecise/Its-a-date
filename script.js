const final = document.querySelector("#finalmessage");
const yesButton = document.querySelector("#yes");
const image = document.querySelector("#gif iframe");

function showmessage(){
    final.textContent = "Message me the date and Time!!!";
    image.src = "https://giphy.com/embed/o75ajIFH0QnQC3nCeD";
}

yesButton.addEventListener("click", showmessage);


const noButton = document.querySelector("#no");

function runAway() {
    const button = noButton;
    const areaWidth = window.innerWidth * 0.6; // Define the width of the area (60% of the window width)
    const areaHeight = window.innerHeight * 0.6; // Define the height of the area (60% of the window height)
    
    // Calculate random coordinates within the defined area
    const randomX = Math.random() * (areaWidth - button.offsetWidth);
    const randomY = Math.random() * (areaHeight - button.offsetHeight);

    // Translate the button to the random coordinates
    button.style.transition = "transform 0.5s ease"; // Apply transition for smooth movement
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

noButton.addEventListener("mouseenter", () => {
    
    runAway();
});

function handleClick() {
    
    runAway();
}

noButton.addEventListener("click", handleClick);