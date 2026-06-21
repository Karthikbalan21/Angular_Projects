"use strict";

const data = document.getElementById("input");
function clearDisplay() {
    data.value = "";
}
function dappend(inp) {
    data.value += inp;
}
function res() {
    try {
        data.value = eval(data.value);
    }
    catch {
        data.value = "Error";
    }
}
