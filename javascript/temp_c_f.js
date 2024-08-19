function convertC() {
    let doC = document.getElementById("c").value;
    let doF = (9 * doC / 5) + 32;
document.getElementById("result").innerHTML = "Result: " + doF + "°F";
}