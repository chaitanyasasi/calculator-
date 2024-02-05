const output = () => {
    const equal = document.getElementById("resultbox").value;
    let x = eval(equal);
    document.getElementById("final").value = x;
}
const exhaust = () => {
    document.getElementById("resultbox").value = '';
    document.getElementById("final").value = '';

};
