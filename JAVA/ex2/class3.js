var plus = document.getElementById("plus");
var reset = document.getElementById("reset");
var min = document.getElementById("min");

var output = document.getElementById("sc");

var score = 0;
plus.addEventListener('click', () => {
    score++;
    output.innerHTML = score;
})

min.addEventListener('click', () => {
    score--;
    output.innerHTML = score;
    if (score < 0) {
        output.style.color = 'red'
    } else if (score >= 0) {
        output.style.color = 'black'
    } el
})

reset.addEventListener('click', () => {
    output.innerHTML = "0";
    // if (score == 0) {
    //     output.style.background = 'red'
    // }
})