
// Chp 38-42

// Q:1

function power ( num , exponent ) {
    var password = 1
    for( i=1; i<=exponent; i++){
    password = password * num
    }

    return password;
}

console.log(power(2,5))

// Q:2

function leapyear (year) {
    if(year % 4 == 0 ){
        alert("It is a leap year")
    }
}

leapyear ( 2016 )

// Q:3

function area ( a , b , c ) {
    var sum = (a + b + c) / 2  
    return sum * ( sum - a) * ( sum - b) * ( sum - c)
}

console.log(area(2,4,6))

// Q:4

function mainfunc (marks1 , marks2 , marks3){

    var obtainedmarks = marks1 + marks2 + marks3
    var totalmarks = 300;

    function average ( ) {
        return obtainedmarks / 2
    }

    console.log( "Average : " , average())

    function percentage () {
        return obtainedmarks / totalmarks * 100
    }

    console.log( "Percentage : " ,  percentage())

}

(mainfunc(23,34,56))

// Q:5

function indexof ( word , findword ) {
    word = String(word).toLowerCase().split("")
    for( i=0; i<word.length; i++ ){
        if(word[i] == findword){
            console.log(findword , " is present at index " , i )
        }
    }
}

indexof("hello" , "o" )

// Q:6

function deletevowel ( word ) {
    word = String(word).toLowerCase().split("")
    var result = ""
    for( i=0; i<word.length; i++ ){
        if(
            word[i] != "a" &&
            word[i] != "e" &&
            word[i] != "i" &&
            word[i] != "o" &&
            word[i] != "u" 
        ){
            result = result + word[i]
        }
    }

    return result
   
}

console.log(deletevowel("Hello hi my name is aarij"))

// Q:7

function countVowels(text) {
    text = text.toLowerCase();

    var count = 0;

    for (var i = 0; i < text.length - 1; i++) {

        switch (text[i]) {

            case "a":
            case "e":
            case "i":
            case "o":
            case "u":

                if (
                    text[i + 1] == "a" ||
                    text[i + 1] == "e" ||
                    text[i + 1] == "i" ||
                    text[i + 1] == "o" ||
                    text[i + 1] == "u"
                ) {
                    count++;
                }

                break;
        }
    }

    return count;
}

console.log(countVowels("Pleases read this application and give me gratuity"));

// Q:8

function distancemethod ( ) {
    var distance = prompt("Enter your distance in km's between two cities")

    function kms_to_metre () {
        return console.log("Km's to metre = ",distance * 1000)
    }

    function kms_to_feet () {
        return console.log("Km's to feet = ",distance * 3280.84)
    }

    function kms_to_inches () {
        return console.log("Km's to inches = ",distance * 39370.1)
    }

    function kms_to_centimeter () {
        return console.log("Km's to centimeter = ",distance * 100000)
    }



    kms_to_metre()
    kms_to_feet()
    kms_to_inches()
    kms_to_centimeter()

}

distancemethod()

// Q:9

function employesspay (hours) {
    hours = parseInt(hours)
    var count = 0;

    for(i=1; i<=hours - 40; i++){
        if(hours > 40){
            count++
        }
    }

    var overtime_payment = count * 12
    return overtime_payment
}

console.log(employesspay(56))

// Q:10

function money (amount) {

    var hundred = Math.floor(amount / 100) 
    var remaining_hundredamount = amount % 100
    
    var fifty =  Math.floor(remaining_hundredamount / 50)
    var remaining_fiftyamount = (remaining_hundredamount % 50)
    
    var ten = Math.floor(remaining_fiftyamount / 10)
    var remaining_tenamount = remaining_fiftyamount % 10    

    return document.write("You have ",hundred," hundred notes ",fifty," fifty notes and ",ten," ten notes")
}

money (670)

// ----------------------------------------------------------------------------------------------------

// Chp 43-48

// Q:1

function alertfunction () {
    alert()
}

// Q:2

function alertfunction () {
    alert()
}

// Q:3

var row1 = document.getElementById("row 1")
var row2 = document.getElementById("row 2")
var row3 = document.getElementById("row 3")

 function removefunction1 () {
    row1.remove()
}

 function removefunction2 () {
    row2.remove()
}

 function removefunction3 () {
    row3.remove()
}

// Q:4

var image1 = document.getElementById("image1")
var image2 = document.getElementById("image2")

image1.onmouseover = function () {
    image1.style.display = "none"
    image2.style.display = "block"
}

image1.onmouseout = function () {
    image1.style.display = "block"
    image2.style.display = "none"
}

// Q:5

var Increasebutton  = document.getElementById("Increase button")
var decraesebutton =  document.getElementById("decraese button")
var text = document.getElementById("text")
var count = 0;

Increasebutton.onclick = function () {
    count++
    console.log(count)
    text.innerHTML = "Counter value : " + count
}

decraesebutton.onclick = function () {
    count--
    console.log(count)
    text.innerHTML = "Counter value : " + count
}

// --------------------------------------------------------------------------------------------------

// Chp 49-52

// Q:1

var names = document.getElementById("nameinput")
var email = document.getElementById("emailinput")
var password = document.getElementById("passwordinput")
var submitbutton = document.getElementById("submitbutton")
var nametxt = document.getElementById("nametext")
var emailtext = document.getElementById("emailtext")
var passwordtext = document.getElementById("passwordtext")

submitbutton.onclick = function(){

    if(!names.value){
        alert("Please Enter a name")
        return
    }

    if(!email.value){
        alert("Please Enter email")
        return
    }

    if(!email.value.includes("@")){
        alert("Please use @ in email")
        return
    }

    if(password.value < 8 ){
        alert("Password should be 8 characters long")
        return
    }

    

    nametxt.innerHTML = "Name Value : " + names.value
    emailtext.innerHTML = "Email Value : " + email.value
    passwordtext.innerHTML = "Password Value : " + password.value

    names.value = ""
    email.value = ""
    password.value = ""

}

// Q:2

var button = document.getElementById("showmore button")
var text = document.getElementById("text")
var shortext = `A constructor is a special type of function`
var fulltext = ` A constructor is a special type of function or method in object-oriented programming that runs automatically when a new object is created to initialize its properties and set its starting state`

button.onclick = function () {
if(button.innerHTML == "Show more"){
    text.innerHTML = fulltext
    button.innerHTML = "Show less"
}else{
    text.innerHTML = shortext
    button.innerHTML = "Show more"
}
}

// Q:3

var row1_index = document.getElementById("row 1 index")
var row1_name = document.getElementById("row 1 name")
var row1_class = document.getElementById("row 1 class")

var row2_index = document.getElementById("row 2 index")
var row2_name = document.getElementById("row 2 name")
var row2_class = document.getElementById("row 2 class")

var row3_index = document.getElementById("row 3 index")
var row3_name = document.getElementById("row  3 name")
var row3_class = document.getElementById("row 3 class")

var hiddenform = document.getElementById("hiddenform")
var Indexvalue = document.getElementById("Indexvalue")
var Namevalue = document.getElementById("Namevalue")
var Classvalue = document.getElementById("Classvalue")

function Editrow1 () {
    hiddenform.style.display = "block"
    Indexvalue.innerHTML = "Index: " + row1_index.innerHTML;
    Namevalue.innerHTML = "Name:" + row1_name.innerHTML
    Classvalue.innerHTML = "Class:" + row1_class.innerHTML
}

function Editrow2 () {
    hiddenform.style.display = "block"
    Indexvalue.innerHTML = "Index: " + row2_index.innerHTML;
    Namevalue.innerHTML = "Name:" + row2_name.innerHTML
    Classvalue.innerHTML = "Class:" + row2_class.innerHTML
}

function Editrow3 () {
    hiddenform.style.display = "block"
    Indexvalue.innerHTML = "Index: " + row3_index.innerHTML;
    Namevalue.innerHTML = "Name:" + row3_name.innerHTML
    Classvalue.innerHTML = "Class:" + row3_class.innerHTML
}