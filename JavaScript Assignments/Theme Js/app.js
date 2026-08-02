var button = document.getElementById("themeBtn")

button.onclick = function () {
    if(document.body.style.backgroundColor == "white"){
    document.body.style.backgroundColor = "black"
    button.style.color = "black"
    localStorage.setItem("Theme","dark")
} else{
    document.body.style.backgroundColor = "white"
    localStorage.setItem("Theme","white")
}
}