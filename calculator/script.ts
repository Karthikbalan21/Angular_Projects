const data: HTMLInputElement =
document.getElementById("input") as HTMLInputElement;

function clearDisplay(): void {
    data.value = "";
}

function dappend(inp: string): void {
    data.value += inp;
}

function res(): void {
    try {
        data.value = eval(data.value);
    } catch {
        data.value = "Error";
    }
}
