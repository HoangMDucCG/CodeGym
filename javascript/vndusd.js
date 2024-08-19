function ChangeMoney() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result= 0
    if (from !== to){
        if (from === "vnd"){
            result = amount / 24000
        }else {
            result = amount * 24000
        }
    }
    document.getElementById("result").innerText = "Result: " +result.toString();
}