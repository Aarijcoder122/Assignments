var username = document.getElementById("nameinput")
var email = document.getElementById("emailinput")
var Cnic = document.getElementById("Cnicinput")
var select = document.getElementById("Courseinput")
select.value = ""
var sumbit_button = document.getElementById("Submit-button")
var Namevalue = document.getElementById("Namevalue")
var Emailvalue = document.getElementById("Emailvalue")
var Cnicvalue = document.getElementById("Cnicvalue")
var Coursevalue = document.getElementById("Coursevalue")
var idcardbox = document.getElementById("idcard-box")
var valuebox = document.getElementById("valuebox")
var gobackbutton = document.getElementById("go-back-button")

sumbit_button.onclick = function () {

    if(!username.value){
        alert("Please enter name")
        return
    }

    if(!email.value){
        alert("Please enter Email")
        return
    }

    if(!email.value.includes("@")){
        alert("Please use @ in your email")
        return
    }

    if(!Cnic.value){
        alert("Please enter your Cnic number")
        return
    }

    if(Cnic.value.length >= 14){
        alert("Cnic should be 13 characters long")
        return
    }
    
    if(Cnic.value.length <= 12){
        alert("Cnic should be 13 characters long")
        return
    }

    if(!select.value){
        alert("Please enter a course")
    }

    idcardbox.style.display = "none"
    valuebox.style.display = "block"

    Namevalue.innerHTML = "Name : " + username.value
    Emailvalue.innerHTML = "Email : " + email.value
    Cnicvalue.innerHTML =  "Cnic-number : " + Cnic.value
    Coursevalue.innerHTML =  "Course : " + select.value
    
}

gobackbutton.onclick = function () {
    valuebox.style.display = "none"
    idcardbox.style.display = "block"

    username.value = "" 
    email.value = "" 
    Cnic.value = "" 
    select.value = "" 

}
