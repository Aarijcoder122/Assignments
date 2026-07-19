// Random Password Generator

function PasswordGenerator () {
    var randomtext = "a!@469087$%*(`<?/>dgihwquydwqi"
    var password = ""
    for(i=0; i<8; i++){
    var maths = Math.round(Math.random() * 29 )
    password = password + randomtext[maths]
}

console.log(randomtext.length)
document.getElementById("password").innerHTML = password
}

