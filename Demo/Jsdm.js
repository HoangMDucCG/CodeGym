function clickMe() {
    alert("Đã like")
    //lệnh bên dưới để thay đổi màu nền cho thẻ có id là like
    document.getElementById("like").style.backgroundColor="blue"
    //lệnh bên dưới để thay đổi màu chữ cho thẻ có id là like
    document.getElementById("like").style.color="white"
    //lệnh bên dưới để thay đổi nội dung cho thẻ có id là like
    document.getElementById("like").innerText="dislike"
}