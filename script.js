document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
});

function addToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function calculate() {
    const display = document.getElementById("display");
    let result;

    try {
        result = eval(display.value);
        if (result === Infinity || isNaN(result)) {
            display.value = "Erro";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Erro na expressão";
    }
}

function 
