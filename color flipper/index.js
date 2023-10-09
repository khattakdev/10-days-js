const randomColorBtn = document.querySelector(".color-btn")
const colorPreview = document.querySelector(".color-preview")

function getRandomColors() {
    const red = Math.floor(Math.random() * 250); 
    const green = Math.floor(Math.random() * 250); 
    const blue = Math.floor(Math.random() * 250); 

    return `rgb(${red}, ${green}, ${blue})`
}

randomColorBtn.addEventListener("click", (e) => {
    colorPreview.style.background = getRandomColors();
})