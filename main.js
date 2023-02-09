const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type='submit']");

checkbox.disabled= true;
submitBtn.disabled= true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");

elements.forEach(element =>{
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.innerHTML = color;
    selectColor.innerHTML= color;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

elements.forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerHTML === selectColor.innerHTML) {
            alert('You are human!')
            checkbox.checked=true;
            submitBtn.disabled=false;
        }else{
            alert('Please verify that you are human!')
            checkbox.checked=false;
            location.reload(true);
        }
    })
});

