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

let array5 = [
    "Hangman is a classic word-guessing game where player has to guess a word choosed by computer. For each incorrect guess, a part of a stick figure is drawn (representing a hanging man). The guessing player's goal is to guess the word before the entire stick figure is drawn, usually within a limited number of guesses..",
    "This is a simple calculator project using HTML, CSS, and JavaScript involves performing basic calculations or arithmetic operations like addition, subtraction, multiplication, and division etc",
    "A temperature converter project using HTML, CSS, and JavaScript is an application that allows users to convert temperatures between different units such as Celsius, Fahrenheit, and Kelvin.Users can input a temperature in one unit and select the desired unit to convert to, and the application will calculate and display the converted temperature.",
    "Welcome to our Car Rental Website, a sleek and modern project crafted with HTML and CSS. Explore our intuitive interface as you seamlessly navigate through our curated car rental offerings. With clean, structured code and a visually appealing design, booking your desired ride has never been easier. ",
    "This is project made using Python Tkinter for GUI and MySql for handling CRUD operations on tables. In this you can add , update , delete , display student data. Here Data is stored in form of tables in databases."
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

function next(){
    let a = array.indexOf(projectimg.getAttribute("src")) + 1
    let c = array3.indexOf(demolink.getAttribute("href")) + 1
    let d = array2.indexOf(codelink.getAttribute("href")) + 1
    let b = array1.indexOf(projectname.innerHTML) + 1
    let e = array5.indexOf(info.innerHTML) + 1

    if (a === 5){
        a = 0
    }
    if(b === 5){
        b = 0
    }
    if(c === 5){
        c = 0
    }
    if(d === 5){
        d = 0
    }
    if(e===5){
        e=0
    }
    projectimg.setAttribute("src" , array[a])
    demolink.setAttribute("href" , array3[c])
    codelink.setAttribute("href" , array2[d])
    projectname.innerHTML = array1[b]
    info.innerHTML = array5[e]
}

function previous(){
    let a = array.indexOf(projectimg.getAttribute("src")) - 1
    let c = array3.indexOf(demolink.getAttribute("href")) - 1
    let d = array2.indexOf(codelink.getAttribute("href")) - 1
    let b = array1.indexOf(projectname.innerHTML) - 1
    let e = array5.indexOf(info.innerHTML) - 1

    if (a == -1){
        a = 4
    }
    if(b == -1){
        b = 4
    }
    if(c == -1){
        c = 4
    }
    if(d == -1){
        d = 4
    }
    if(e == -1){
        e = 4
    }
    projectimg.setAttribute("src" , array[a])
    demolink.setAttribute("href" , array3[c])
    codelink.setAttribute("href" , array2[d])
    projectname.innerHTML = array1[b]
    info.innerHTML = array5[e]
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