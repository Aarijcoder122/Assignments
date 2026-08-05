
// Q: Higher Order Function kya hota hai?

// Ans: jo callback return krta ha

// Q: Kya map() ek higher order function hai?

// Ans: Yes

// Q: Kya forEach() value return karta hai?

// Ans: yes

// Q: Ek example do Higher Order Function ka.

// var data = [1,2,3,4,5,6]
// data.forEach ( function(value,index,array){
//     console.log(array)
// })

// Q: Callback function kya hota hai?

// Ans: jo ek aur cuntion return krta ha

// Q: Ek function banao jo dusre function ko parameter me le.

// function add() {
//     console.log(10 + 20);
// }

// function run(func) {
//     func();
// }

// run(add);

// Q: filter() ka use kis liye hota hai?

// var data = [1,2,3,4,5,6]
// var filterdata = data.filter(function(value){
//    return value % 2 == 0 
// })

// console.log(filterdata)

// Q: reduce() ka basic purpose kya hai?

// Ans : koi bhi 2 values ke saath operation perform karwaao

// Q: find() aur filter() me kya difference hai?

// Ans: find sirf ek value return krta ha aur filter operation ke hisaab se saari values return krta ha

// Q: map() aur forEach() me kya difference hai?

// Ans: map ek naya array return krta ha ur for each nhi krta array return

// Q: [1,2,3,4] array ke tamam numbers ko double karne ke liye map() use karo.

// var data = [1,2,3,4]
// var doublenum = data.map(function(value){
//     return  value * 2
// })

// console.log(doublenum)

// Q: Ek array of names ko uppercase me convert karo using map().

// var names = ["aarij","humail","taha","faizan"]
// var uppercasename = names.map(function(value){
//     return value.toUpperCase()
// })

// console.log(uppercasename)

// Q: Prices array me har price me 10 add karo using map().

// var data = [1,2,3,4]
// var valueadded = 1
// var adddata = data.map(function(value,index){
//      valueadded = valueadded + 10
//      return {
//         before: value,
//         after: valueadded,
//      }
// })

// console.log(adddata)

// Q: Students names ke sath "Mr." add karo using map().

// var names = ["aarij","humail","taha","faizan"]
// var namechange = names.map(function(value){
//     return "Mrs " + value
// })

// console.log(namechange)

// Q: Numbers array ko square me convert karo.

// var num = [1,2,3,4,5]
// var square = num.map(function(value){
//     return value * value
// })

// console.log(square)

// Q: [1,2,3,4,5,6] me se sirf even numbers filter karo.

// var num = [1,2,3,4,5,6] 
// var evennum = num.filter(function(value){
//      return value % 2 == 0
// })

// console.log(evennum)

// Q: Names array me sirf wo names filter karo jinki length 5 se zyada ho.

// var names = ["Aarij","Humail","Faizan","Taha"]
// var lengthname = names.filter(function(value){
//     return value.length > 5
// })

// console.log(lengthname)

// Q:  Ek prices array me sirf prices greater than 100 filter karo.

// var prices = [23,45,67,89,110,123,1456,1876]
// var pricesgreater = prices.filter(function(value){
//     return value > 100
// })

// console.log(pricesgreater)

// Q:  Students me se passed students filter karo.

// var studentmarks = [67,45,69,89,98,23,43,11];

// var studentpassed = studentmarks.filter(function(value){

//     return value > 50;

// });

// console.log(studentpassed);

// Q: Negative numbers ko filter karo.

// var num = [3,2,1,0,-1,-2,-3,-4,-5]
// var Negativenum = num.filter(function(value){
//     return value < 0 
// })

// console.log(Negativenum)

// Q: Array ke tamam elements console me print karo using forEach().

// var num = [1,2,3,4,5,6]
// var numprint = num.forEach(function(value){
//     return console.log(value)
// })

// numprint

// Q: Ek fruits array ko numbering ke sath print karo.

// var fruits = ["Apple","Banana","Peach","Mango"]
// var fruitscounting = fruits.forEach(function(value,index){
//     return console.log("At number ",index," fruit is ",value)
// })

// fruitscounting

// Q: Users array me har user ko welcome message do.

// var user = ["Aarij","Humail","Faizan","Taha"]
// var usermessage = user.forEach(function(value){
//     return alert("Welcome " + value)
// })

// usermessage;

// Q: Ek array ka total manually forEach() se nikalo.

// var num = [1,2,3,4,5,6,7,8]
// var doublevalue = 0
// var numdouble = num.forEach(function(value){
//     doublevalue = doublevalue + value
//     console.log(doublevalue)
// })

// numdouble

// Q: Har student ka naam uppercase me print karo.

// var names = ["Aarij","Humail","Faizan","Taha"]
// var nameuppercasefunction = names.forEach(function(value){
//     return console.log(value.toUpperCase())
// })

// nameuppercasefunction;

// Q: [10,20,30,40] me se first number greater than 25 find karo.

// var num = [10,20,30,40]
// var numfindfunction  = num.find(function(value){
//     return value > 25
// })

// console.log(numfindfunction)

// Q: Users array me "Ali" naam ka user find karo.

// var names = ["Aarij","Humail","Faizan","Taha","Ali"]
// var namefincfunction = names.find(function(value){
//     return value == "Ali" 
// })

// console.log(namefincfunction)

// Q: Ek products array me first expensive product find karo.

// var product = [{
//     name: "Juicer" , price: 10000 ,
//     name: "Oven" , price: 40000 ,
//     name: "Fridge" , price: 20000 ,
//     name: "Tv" , price: 80000 ,
// }]

// var expensiveproducts = product.find(function(value){
//     return value.price < 100000
// })

// console.log(expensiveproducts)

// Q: Ek array me first even number find karo.

// var num = [1,2,3,4,5,6]
// var numevenfunction = num.find(function(value){
//     return value % 2 == 0
// })

// console.log(numevenfunction)

// Q: Students me first failed student find karo.

// var student = [
//     {name: "Aarij" , marks: 98},
//     {name: "Humail" , marks: 67 },
//     {name: "Taha" , marks: 42 },
//     {name: "Fizza" , marks: 100 }
// ]

// var studentsfincfunction = student.find(function(value){
//     return value.marks < 50
// })

// console.log(studentsfincfunction)

// Q: [1,2,3,4] ka sum reduce() se nikalo.

// var num = [1,2,3,4]
// var numreducefunc = num.reduce(function(prev,curr){
//     return prev + curr
// })

// console.log(numreducefunc)

// Q: Prices array ka total calculate karo.

// var pricesarray = [1000,2000,4000,6623,8633,8166]
// var pricesarrayreducefunc = pricesarray.reduce(function(prev,curr){
//     return prev + curr
// })

// console.log(pricesarrayreducefunc)

// Q: Numbers array ka maximum value find karo using reduce().

// var num = [1,2,4,5,56,6,8,9]
// var maxnumfunc = num.reduce(function(prev,curr){
//     if(prev > curr){
//         return prev
//     }else{
//         return curr
//     }
// })

// console.log(maxnumfunc)

// Q: Ek words array ko single sentence me convert karo.

// var names = ["Aarij","Humail","Faizan","Taha","Ali"]
// var word = names.reduce(function(prev,curr){
//     prev =  prev + curr
//     return prev.split(" ")
// })

// console.log(word) 

// Q: Shopping cart ka total bill calculate karo.

// var cart = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 2500 },
//     { name: "Headphones", price: 3000 }
// ];

// var totalbillfunction = cart.reduce(function(prev,curr){
//     return prev + curr.price
// },0)

// console.log(totalbillfunction)

// Q: [1,2,3,2,4,2] me last 2 ka index find karo.

// var num = [1,2,3,2,4,2]
// console.log(num.lastIndexOf(2))

// Q: Last even number ka index find karo.

// var num = [1,2,3,4,5,6,7];

// var lastEven;

// num.forEach(function(value){
//     if(value % 2 == 0){
//         lastEven = value;
//     }
// });

// var index = num.lastIndexOf(lastEven);

// console.log(index);

// Q: Ek names array me last "Ali" ka index find karo.

// var names = ["Aarij","Humail","Faizan","Taha","Ali","Zafar","Ali salman"]
// var alivalue;
// var findfunc = names.forEach(function(value){
//     if(value.includes("Ali")){
//         alivalue = value
//     }
// })

// var alifindfunc = console.log(names.lastIndexOf(alivalue))

// Q: Ek products array me last expensive product ka index nikalo.

// var products = [
//     {name: "Oven", Price: 10000},
//     {name: "Fridge", Price: 60000},
//     {name: "Tv", Price: 80000},
//     {name: "Juicer", Price: 20000},
// ];

// var lastProduct;

// products.forEach(function(value){
//     if(value.Price > 50000){
//         lastProduct = value;
//     }
// });

// var index = products.indexOf(lastProduct);

// console.log(index);

// Q: Array me last negative number ka index find karo.

// var num = [5, -2, 10, -7, 8, -1, 4];

// var lastNegative;

// num.forEach(function(value) {
//     if (value < 0) {
//         lastNegative = value;
//     }
// });

// var index = num.lastIndexOf(lastNegative);

// console.log(index);

//  Q: Object kya hota hai JavaScript me?

// Ans : object ek refrencedata type ha 

// Q: Ek student object banao jisme name aur age ho.

// var student = {
//     name: "Aarij",
//     age: 23
// }

// Q: Object ki property access karne ke 2 methods likho.

// var student = {
//     name: "Aarij",
//     age: 23
// }

// console.log(student["name"])
// console.log(student.name)

// Q: Object me new property add karo.

// var student = {
//     name: "Aarij",
//     age: 23
// }

// student.rollno = 25
// student["rollno"] = 28

// console.log(student)

// Q: Object ki property delete karo.

// var student = {
//     name: "Aarij",
//     age: 23
// }

// delete student.age

// console.log(student)

// Q: Ek car object banao jisme brand aur model ho.

// var car = {
//     brand: "Civic",
//     model: "2022"
// }

// Q: Object ke andar function ka example do

// var student = {
//     name: "Aarij",
//     age: 23,
//     address : function(){
//         console.log("Student adress")
//     }
// }

// console.log(student.address())

// Q: this keyword object me kya karta hai?

// Ans : this.keyword object ki keys ki value return krta ha
    // Syntax ---> this.key = key.value

// Q: Object keys kaise nikalte hain?

// var student = {
//     name: "Aarij",
//     age: 23,
//     address : function(){
//         console.log("Student adress")
//     }
// }

// console.log(Object.keys(student))

// Q: Object values kaise nikalte hain?

// var student = {
//     name: "Aarij",
//     age: 23,
//     address : function(){
//         console.log("Student adress")
//     }
// }

// console.log(Object.values(student))

// Q: Ek object ke andar object ka example banao.

// var student = {
//     name: "Aarij",
//     age: 23,
//     address: {
//         city: "Karachi",
//         area: "Dha"
//     }

// }

// console.log(student)

// Q: User object ke andar address object create karo.

// var student = {
//     name: "Aarij",
//     age: 23,
//     address: {
//         city: "Karachi",
//         area: "Dha"
//     }

// Q: Nested object ki city access karo.

// var student = {
//     name: "Aarij",
//     age: 23,
//     address: {
//         city: "Karachi",
//         area: "Dha"
//     }
// }

// console.log(student.address.city)

// Q: Student object me marks object add karo

// var student = {
//     name: "Aarij",
//     age: 23,
//     address: {
//         city: "Karachi",
//         area: "Dha"
//     }
// }

// student.marks = 0

// console.log(student)

// Q: Company object me employee object create karo.

// var company = {
//     employee:{

//     }
// }

// Q: Array of objects kya hota hai?

// Ans: Array of objects ek array ke andar object banane ko kehte ha

// Q: Students ka array banao jisme har student ka name aur marks ho.

// var students = [
//     { name: "Aarij" , marks: 23 },
//     { name: "Taha" , marks: 19 },
//     { name: "Salman" , marks: 0 },
//     { name: "Aariz" , marks: 43 },
// ]

// Q: Array of objects me se sirf names print karo.

// var students = [
//     { name: "Aarij" , marks: 23 },
//     { name: "Taha" , marks: 19 },
//     { name: "Salman" , marks: 0 },
//     { name: "Aariz" , marks: 43 },
// ]

// console.log(students[0].name)

// Q: Passed students filter karo from array of objects.

// var students = [
//     { name: "Aarij" , marks: 23 },
//     { name: "Taha" , marks: 19 },
//     { name: "Salman" , marks: 0 },
//     { name: "Aariz" , marks: 43 },
// ]

// var filterstudents = students.filter(function(value){
//     if(value.marks > 20){
//         return "he is passed"
//     }
// })

// console.log(filterstudents)

// Q: map() use karke students names uppercase me convert karo.

// var students = [
//     { name: "Aarij" , marks: 23 },
//     { name: "Taha" , marks: 19 },
//     { name: "Salman" , marks: 0 },
//     { name: "Aariz" , marks: 43 },
// ]

// var studentmapfunc = students.map(function(value){
//     return value.name.toUpperCase()
// })

// console.log(studentmapfunc)

// Q: Highest marks wala student find karo.

// var students = [
//     { name: "Aarij" , marks: 23 },
//     { name: "Taha" , marks: 19 },
//     { name: "Salman" , marks: 0 },
//     { name: "Aariz" , marks: 43 },
// ]

// var highest = students[0]

// var studentmarksfunc = students.forEach(function(value){
//     if(value.marks > highest.marks){
//         highest = value
//     }
// })

// console.log(highest)

// studentmarksfunc

// Q: Ek products array me total stock calculate karo.

// var products = [
//     {name: "Oven", Stock: 1},
//     {name: "Fridge", Stock: 3},
//     {name: "Tv", Stock: 8},
//     {name: "Juicer", Stock: 9},
// ];

// var highest = 0

// var productsmarksfunc = products.forEach(function(value){
//     highest = highest + value.Stock
// })

// console.log("Updated Stock: ",highest)

// productsmarksfunc

// Q: Array of objects me new object push karo.

// var products = [
//     {name: "Oven", Stock: 1},
//     {name: "Fridge", Stock: 3},
//     {name: "Tv", Stock: 8},
//     {name: "Juicer", Stock: 9},
// ];

// products.push({Name: "Aarij" , price: 8977})

// console.log(products)

// Q: User object ko array me find karo.

// var products = [
//     {name: "Oven", Stock: 1},
//     {name: "Fridge", Stock: 3},
//     {name: "Tv", Stock: 8},
//     {name: "Juicer", Stock: 9},
//     {User: "taha" , rollno: 89}
// ];

// var productfindfunc = products.find(function(value){
//     return value.User == "taha"
// })

// console.log(productfindfunc)

// Q: Array of objects ko loop se print karo

// var products = [
//     {name: "Oven", Stock: 1},
//     {name: "Fridge", Stock: 3},
//     {name: "Tv", Stock: 8},
//     {name: "Juicer", Stock: 9},
//     {User: "taha" , rollno: 89}
// ];

// for(i=0; i<products.length; i++){
//     console.log(products[i])
// }

