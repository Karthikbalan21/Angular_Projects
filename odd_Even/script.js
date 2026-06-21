"use strict";
function Check() {
    const n1 = document.getElementById("n1");
    const num = parseInt(n1.value);
    if (num % 2 == 0) {
        alert(`${num} is an Even Number`);
    }
    else {
        alert(`${num} is an Odd Number`);
    }
}
