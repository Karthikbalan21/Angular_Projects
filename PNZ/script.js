"use strict";
function pnz() {
    const numref = document.getElementById("num");
    const n = parseInt(numref.value);
    if (n > 0) {
        alert(`The given number ${n} is Positive`);
    }
    else if (n == 0) {
        alert(`The given number ${n} is Zero`);
    }
    else {
        alert(`The given number ${n} is Negative`);
    }
}
