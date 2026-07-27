var color = document.getElementById("Color")
var button = document.getElementById("button")
var colorcode = "0123456789ABCDEF"
var randomnum = Math.floor(Math.random() * 16)

button.onclick = function () {

    var result = "#"

    for( i=0; i<6; i++ ){
        var randomnum = Math.floor(Math.random() * 16)
        result = result + colorcode[randomnum]
    }

    document.body.style.backgroundColor = result
    color.innerHTML = "Color  :" + result

}

