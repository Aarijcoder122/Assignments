// Chp 21-25

// Q:1

var firstname = prompt("Enter your first name")
var lastname =  prompt("Enter your last name")
var fullname = firstname +" "+ lastname
document.write(fullname)

// Q:2

var userphonemodel = prompt("Enteryou phone model")
var length = userphonemodel.length
document.write("Length of string = ",length)

// Q:3

var word = "Pakistani"
var index = word.indexOf("n")
document.write("Index of n = ",index)

// Q:4

var word = "Hello World"
var index = word.length-2
console.log(word.length)
document.write(" Last Index of l = ",index)

// Q:5

var word = "Pakistan"
var index = word.charAt(3)
document.write("Character at index 3 is = ",index)

// Q:6

firstname = prompt("Enter your First name")
lastname = prompt("Enter your Second name")
fullname = firstname.concat( " " , lastname)
document.write(fullname)

// Q:7

var word = "Hyderabad"
var replaceword = word.replace("Hyder","Islam")
document.write("City : ",word,"<br>")
document.write("After replacement : ",replaceword)

// Q:8

var message = "Ali and Sami are best friends. They play cricket and football together."
var replacemessage = message.replaceAll("and","&")
document.write("Message : ",message,"<br>")
document.write("After replacement : ",replacemessage)

// Q:9

var num1 = "472"
document.write(num1,"<br>")
document.write(typeof(num1),"<br>")
var num2 = Number(num1)
document.write(num2,"<br>")
document.write(typeof(num2),"<br>")

// Q:10

var userinput = prompt("Enter ypur word")
var capital_letter = userinput.toUpperCase()
document.write("User input : ",userinput,"<br>")
document.write("Upper case : ",capital_letter,"<br>")

// Q:11

var text = "hello it is javascript"
var word = text.split(" ")
var result = []
for( i=0; i<word.length; i++ ){
    result.push(word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase())
}

result = result.join(" ")
document.write(result)

// Q:12

var num = 35.36
document.write("Number : ",num,"<br>")
var stringnum = String(num) 
stringnum = stringnum.replace(".","")
document.write("Result : ",stringnum)

// Q:13

var userinput = prompt("Enter a name")
    if(userinput.includes("@") || userinput.includes("!") || userinput.includes(".") || userinput.includes(",")  ){
        alert("please enter a valid username")
    }

// Q:14

var bakeryitems = ["cake","apple pie","cookie","chips","patties"]
var userinput = prompt("Welcome to ABC bakery. What would you want to order Sir/Mam?")
userinput = userinput.toLowerCase()
if (bakeryitems.includes(userinput)){
    var index = bakeryitems.indexOf(userinput)
    document.write(userinput," is available at index ",index, " in our bakery ")
}else{
    document.write("We are sorry ",userinput," is not available in our bakery")
}

// Q:15

var userinput = prompt("Enter a password")

// (a)

var falsyalphabet = false
var falsynum = false

for( i=0; i<userinput.length; i++){
if(userinput[i] >= "a" || userinput[i] >= "A"  ){
    falsyalphabet = true
}
}

for( i=0; i<userinput.length; i++){
    if(userinput[i] >= 0){
        falsynum = true
    }
}


if(falsyalphabet == false){
    alert('it should contain alphabtes')
}

if(falsynum == false){
    alert('it should contain numbers')
}

// (b)

if(userinput[0] >= 0){
    alert("It should not be start with a number")
}

// (c)

if(userinput.length <= 6){
    alert("It should be at least 6 chatacters long")
}

// Q:16

var university = "University of karachi"
university = university.split("")
document.write(university,"<br>")

// Q:17

var userinput = prompt("Enter a word")
var index = userinput.charAt(userinput.length-1)
document.write("User Input : ",userinput,"<br>")
document.write("Last character of input : ",index)

// Q:18

var text = "The quick brown fox the jumps over the lazy dog"
text = text.toLowerCase()
var word = text.split(" ")
var count = 0;

for( i=0; i<word.length; i++){
    if(word[i] == "the"){
        count++
    }
}

document.write("Text : ",text,"<br>")
document.write("There are ",count," occurences of the word the")

// -----------------------------------------------------------------------------------------------

// Chp 26-30

// Q:1

var usernum = prompt("Enter a positive integer")
document.write("Number : ",usernum,"<br>")
document.write("Round off value : ",Math.round(usernum),"<br>")
document.write("floor value : ",Math.floor(usernum),"<br>")
document.write("ceil value : ",Math.ceil(usernum),"<br>")

// Q:2

var usernum = prompt("Enter a negative integer")
document.write("Number : ",usernum,"<br>")
document.write("Round off value : ",Math.round(usernum),"<br>")
document.write("floor value : ",Math.floor(usernum),"<br>")
document.write("ceil value : ",Math.ceil(usernum),"<br>")

// Q:3

var num = -44
document.write(Math.abs(num))

// Q:4

var dicenum = Math.round(Math.random()*6)
document.write("Dice number : ",dicenum)

// Q:5

var cointoss = Math.ceil(Math.random()*2)
if(cointoss == 1){
    document.write(cointoss,"<br>")
    document.write("Random coin value : Heads")
}

if(cointoss == 2){
    document.write(cointoss,"<br>")
    document.write("Random coin value : Tails")
}

// Q:6

var randomnum = Math.round(Math.random()*100)
document.write("Random number between 1 and 100 : ",randomnum )

// Q:7

var userinput = prompt("Enter your weight")
var parse1 = parseFloat(userinput)
document.write(parse1)

// Q:8

var userinput = prompt("Enter your number")
var secretnum = Math.round(Math.random()*10)
console.log(secretnum)
if(userinput == secretnum){
    alert("correct")
}else{
    document.write("wrong number try again")
}

// -------------------------------------------------------------------------------------------------

// Chp 31-34

// Q:1

document.write(new Date())

Q:2

var date = new Date()
var month = date.getMonth()
var months = ["jan","feb","march","april","may","june","july","august","september","october","november","december"]
document.write("Current month : ",months[month])

// Q:3

var day = new Date().getDay()
var daysarray = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
var currentday = daysarray[day]
var dayname = currentday.slice(0,3)
console.log(currentday)
if(currentday == "sunday"){
    alert("sun")
}
document.write("Today is : ",dayname)

// Q:4

var day = new Date().getDay()
var daysarray = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
var currentday = daysarray[day]
if(currentday == "saturday"){
    alert("Its fun day")
}else if(currentday == "sunday"){
    alert("Its fun day")
}

// Q:5

var date = new Date().getDate()
console.log(date)
if(date < 16){
    alert("FIrst fifteen days of the month")
}else{
    alert("Last days of the month")
}

// Q:6

var currentdate = new Date()
var pastdate = new Date("1,Jan,1970")
var ellapsed_milliseconds = currentdate - pastdate
var ellapsed_minutes = ellapsed_milliseconds / (1000 * 60 )
document.write("Current date : ",currentdate,"<br>")
document.write(" Ellapsed Minutes since January 1st 1970 : ",ellapsed_milliseconds,"<br>")
document.write(" Ellapsed Minutes since January 1st 1970 : ",ellapsed_minutes,"<br>")

// Q:7

var date = new Date().getHours()
if(date <= 12){
    alert("Its 12 am")
}else if(date >= 12){
    alert("Its 12 pm")
}

// Q:8

var lastdate = new Date("Thu dec 31 2020")
document.write(lastdate)

// Q:9

var current_ramadandate = new Date("28 Feb 2025")
var pastramzandate = new Date("18 Jun 2015")
var days = current_ramadandate - pastramzandate
var dayspassed = days /  ( 1000 * 60 * 60 * 24)
console.log(days)

// Q:10

var dategiven = new Date("5 Dec 2015 22:50:16")
var startofyeardate = new Date("1 Jan 2015")
var millisecond = dategiven - startofyeardate
var Elapsed_seconds = millisecond / 1000
document.write("On reference date ",dategiven,"<br>")
document.write(Elapsed_seconds," seconds had passed since the beginning of 2015")

// Q:11

var currentdate = new Date()
var pasthourdate = new Date(currentdate - (1000 * 60 * 60 ))
document.write("Current Date : ",currentdate,"<br>")
document.write("1 hour ago it was ",pasthourdate)

// Q:12

var currentdate = new Date()
var pastdate = new Date(currentdate - (1000 * 60 * 60 * 24 * 365 * 100 ))
document.write("Current date : ",currentdate,"<br>")
document.write("100 years back it was ",pastdate)

// Q:13

var date = new Date().getFullYear()
var userage = prompt("Enter your age")
var age = date - userage
document.write("Age : ",userage,"<br>")
document.write("Your birth year is : ",age)

// Q:14

var name  = prompt("Enter Your Name")
var currentmonth = new Date().getMonth()
var units = 335
var charge = 16
var payable_amount = charge * units
var late_payment = 350
var gross = payable_amount + late_payment


document.write("<b>K-Electric Bill</b><br><br><br>")
document.write("Customer Name : ",name,"<br>")
document.write("Month : ",currentmonth,"<br>")
document.write("Number Of Units : ",units,"<br>")
document.write("Charges Per Unit : ",charge,"<br>")
document.write("Net Amount Payable ( within Due Date ): ",payable_amount,"<br>")
document.write("Late payment subcharge : ",late_payment,"<br>")
document.write("Gross Amount Payable ( after Due Date ): ",gross)

// ---------------------------------------------------------------------------------------------

// Chp 35-38

// Q:1

function currenttime () {
    document.write(new Date())
}

currenttime()

// Q:2

function name () {
    var firstname = prompt("Enter your first name")
    var lastname =  prompt("Enter your last name")
    var fullname = firstname.concat(" ",lastname)
    document.write(fullname)
}

name()

// Q:3

function add ( ) {
    var num1 = +prompt("Enter 1st number")
    var num2 = +prompt("Enter 2nd number")
    return num1 + num2
}

document.write(add())

// Q:4

function opeartion (num1,num2,opeartion) {
    if(opeartion == "+"){
        return num1 + num2
    }
    else if(opeartion == "-"){
        return num1 - num2
    }
    else if(opeartion == "*"){
        return num1 * num2
    }
    else if(opeartion == "/"){
        return num1 / num2
    }
    else if(opeartion == "%"){
        return num1 % num2
    }
}

document.write(opeartion(2,4,"/"))

// Q:5

function squares (a){
    return a*a
}

document.write(squares(8))

// Q:6

function factorial (n) {
    var result = 1
    for ( i=n; i>=1; i-- ){
        result = result * i
    }

    return result;
}
document.write(factorial(5))

// Q:7

function counting (num1,num2){
    for ( i=num1; i<=num2; i++){
       document.write(i,"<br>")
    }
}

counting(10,20)

// Q:8

function calculatehypotenuse(base,perpendicular){

    function Calculatesquare(num){
      return num * num
    }

    var Hypotenuse = Math.sqrt(Calculatesquare(base) + Calculatesquare(perpendicular))
    return document.write("Hypotenuse : ",Hypotenuse)
}

calculatehypotenuse(6,4)

// Q:9

// (i)

function area (width,height){
    return document.write("Area : ",width * height)
}

area (23,3)

// (ii)

var width = 5;
var height = 4;

function area(width, height) {
    return width * height;
}

document.write("Area: " + area(width, height));

// Q:10

function palindrome (word) {
    var reverseword = String(word).toLowerCase().split("").reverse().join("")
    if(word == reverseword){
        alert("Word match")
    }else{
        alert("Word don't match")
    }
}

palindrome("did")

// Q:11

function tittlecase (word) {
    word = String(word).split(" ")
    var result = []

    for ( i=0; i<word.length; i++){
        var capitalword = word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase()
        result.push(capitalword)
    }

    return result.join(" ")
}

document.write(tittlecase("hell nehh brother"))

// Q:12

function longestword (word) {

    word = String(word).split(" ")
    var longest = ""
    for( i=0; i<word.length; i++ ){
        if( word[i].length > longest.length  ){
            longest = word[i]
        }
    }

    return longest;
}

document.write(longestword("Web Development Tutorial"))

// Q:13

function occurence (string,letter){
    string = String(string).split("")
    var findword = letter
    var count = 0
    for( i=0; i<string.length; i++ ){
        if(string[i] == findword){
            count++
        }
    }

    string = string.join("")

    return document.write(string,letter,count)
}

occurence("fizza","z" )

// Q:14

function circumference (radius) {
    return  2 * 3.142 * radius
} 

document.write("The circumference is ",circumference(4))

function calcarea (radius) {
    var radius_square = radius * radius
    return 3.142 * radius_square
}

document.write("The area is ",calcarea(4))






