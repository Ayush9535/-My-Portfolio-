let array = [
    "hangman.png",
    "calc.png",
    "temp.png",
    "car rental.png",
    "sdms.png"
]

let array1 = [
    "Hangman Game",
    "Calculator",
    "Temperature Convertor",
    "Car Rental Website",
    "Student Data Management System"
]

let array2 = ["https://github.com/Ayush9535/Hangman-Game" , "https://github.com/Ayush9535/Calculator" , "https://github.com/Ayush9535/Temperature-Convertor" , "https://github.com/Ayush9535/Car-Rental-Website" , "https://github.com/Ayush9535/Student-Data-Management-System"]

let array3 = ["https://hangman-game-project1.netlify.app/" , "https://calc-website.netlify.app/", "https://temp-convert-website.netlify.app/" , "https://car-rental-website-project.netlify.app/" , "https://www.google.com"]

const contactform = document.getElementById("cont")
const resulttext = document.getElementById("result-text")
const username = document.getElementById("username")
const email = document.getElementById("email")
const number = document.getElementById("number")
const projectimg = document.getElementById("project-img")
const projectname = document.getElementById("project-name")
const demolink = document.getElementById("demo-link")
const codelink = document.getElementById("code-link")
const contact = document.getElementById("contactform")
const submitbutton = document.getElementById("submit-button")
const message = document.getElementById("message")
const info = document.getElementById("info")

const togglebtn = document.getElementById("toggle-btn")
const toggleimg = document.getElementById("toggle")
const csslink = document.getElementById("csslink")
const profile = document.getElementById("profile")
const giticon = document.getElementById("githubicon")
const linkedinicon = document.getElementById("linkedinicon")
const instaicon = document.getElementById("instagramicon")

function toggledarklight(){
    if (toggleimg.getAttribute("src") == "https://cdn-icons-png.flaticon.com/128/439/439842.png"){
        toggleimg.setAttribute("src" , "https://cdn-icons-png.flaticon.com/128/1812/1812660.png");
        csslink.setAttribute("href" , "light.css");
        giticon.setAttribute("src" , "https://pngimg.com/uploads/github/github_PNG40.png")
        linkedinicon.setAttribute("src" , "https://www.clipartmax.com/png/middle/304-3041379_linkedin-with-circle-comments-transparent-background-website-icon.png")
        instaicon.setAttribute("src" , "https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Instagram-logo-transparent-PNG.png")
    }else{
        toggleimg.setAttribute("src" , "https://cdn-icons-png.flaticon.com/128/439/439842.png");
        csslink.setAttribute("href" , "dark.css");
        giticon.setAttribute("src" , "https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png")
        linkedinicon.setAttribute("src" , "https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-orange.png")
        instaicon.setAttribute("src" , "https://th.bing.com/th/id/R.30917a4b76e1c0145e5b53cc2b9cda5a?rik=Gl%2b8g2%2bSTV86Vg&riu=http%3a%2f%2fwww.jobs-blog.com%2fwp-content%2fuploads%2f2021%2f03%2fOrange-Instagram.png&ehk=Uj08D5SSmtMAquSafLA4Dosj3Hi2O6G7b6YJvr93ozg%3d&risl=&pid=ImgRaw&r=0")
    }
}

function showcontact(){
    contactform.classList.add("show")
}

function closecontact(){
    contactform.classList.remove("show")
    submitbutton.classList.remove("hide")
    resulttext.innerText = ""
    username.value = "" 
    email.value = "" 
    number.value = ""
    message.value = ""
    
}

function contactsubmit(){
    if (number.value.length != 10){
        alert("Please Enter a 10 Digit Phone Number")
    }
    else if (username.value != "" && email.value != "" && number.value != ""){
        submitbutton.classList.add("hide")
        resulttext.innerHTML = "Thank You..!! <br>  I will contact you soon."
    }
}

const goup1 = document.getElementById("goup1")
const goup = document.getElementById("goup")

function goesup(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

function reload(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
    if (window.scrollY === 0){
        window.location.reload()
    }
}


window.addEventListener("scroll" ,()=>{
    if (window.scrollY > 400) {
        goup1.style.display = "block";
    }else{
        goup1.style.display = "none";
    }
})