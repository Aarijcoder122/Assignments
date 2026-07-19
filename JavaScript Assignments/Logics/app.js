// Random Password Generator

var randomtext = "a!@469087$%*(`<?/>dgihwquydwqi"
var Password = ""
for( i=0; i<9; i++ ){
    var maths = Math.round(Math.random()*30)
    Password = Password + randomtext[maths]
}
console.log(Password)

// Ramadan logic

var currentdate = new Date()
var futuredate = new Date("7 Feb 2027")
var date = futuredate - currentdate
var day = date / (1000 * 60 * 60 * 24 )
var daysremaining = Math.ceil(day)
console.log(daysremaining)

