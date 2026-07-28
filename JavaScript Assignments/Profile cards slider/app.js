var datarray = [
    {
        username : "Aarij maniar",
        usertext : "I am a front end developer having skills of Html , Css , javascript , Bootstrap and github. ssekimg for internship",
        image : "image 1.jfif",
    },
    {
        username : "Humail Maniar",
        usertext : "I am a Chartered Accountant including skills of finace and mirchawala , ssekimg for internship",
        image : "img 2.avif"
    },  
    {
        username : "Faizan Shaikh",
        usertext : "I am a graphic designer at aptech and have skills of github, javascript and bootcamp seeking an internship",
        image : "img 3.jpg"
    }
]

var leftarrowlogo = document.getElementById("leftarrowlogo")
var rightarrowlogo = document.getElementById("rightarrowlogo")
var usernames = document.getElementById("usernames")
var Userregards = document.getElementById("Userregards")
var Profileimage = document.getElementById("Profileimage")

var index = 0;

rightarrowlogo.onclick = function () {
    if(index > datarray.length){
        index--
    }else{
        index ++
    }

    if(index == 3){
        index = 0
    }

    Profileimage.src = datarray[index].image
    usernames.innerHTML = datarray[index].username
    Userregards.innerHTML = datarray[index].usertext
}

leftarrowlogo.onclick = function () {
    
    if(index < datarray.length  ){
        index--
    }else{
        index++
    }
    if(index == -1){
        index = 2
    }

    

    console.log(index)

    Profileimage.src = datarray[index].image
    usernames.innerHTML = datarray[index].username
    Userregards.innerHTML = datarray[index].usertext
}

