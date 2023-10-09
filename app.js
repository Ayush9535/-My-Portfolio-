let array = [
    "hangman.png",
    "calc.png",
    "temp.png",
    "sdms.png"
]

let array1 = [
    "Hangman Game",
    "Calculator",
    "Temperature Convertor",
    "Student Data Management System"
]

let array2 = ["https://github.com/Ayush9535/Hangman-Game" , "https://github.com/Ayush9535/Calculator" , "https://github.com/Ayush9535/Temperature-Convertor" , "https://github.com/Ayush9535/Student-Data-Management-System"]

let array3 = ["https://hangman-game-project1.netlify.app/" , "https://calc-website.netlify.app/", "https://temp-convert-website.netlify.app/" , "https://www.google.com"]

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
        // profile.setAttribute("src" , "11zon_cropped.png")
    }else{
        toggleimg.setAttribute("src" , "https://cdn-icons-png.flaticon.com/128/439/439842.png");
        csslink.setAttribute("href" , "dark.css");
        giticon.setAttribute("src" , "https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png")
        linkedinicon.setAttribute("src" , "https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-orange.png")
        instaicon.setAttribute("src" , "https://th.bing.com/th/id/R.30917a4b76e1c0145e5b53cc2b9cda5a?rik=Gl%2b8g2%2bSTV86Vg&riu=http%3a%2f%2fwww.jobs-blog.com%2fwp-content%2fuploads%2f2021%2f03%2fOrange-Instagram.png&ehk=Uj08D5SSmtMAquSafLA4Dosj3Hi2O6G7b6YJvr93ozg%3d&risl=&pid=ImgRaw&r=0")
        // profile.setAttribute("src" , "ayushimg.png")
    }
    console.log("hii")
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
    console.log(username.value)
    if (username.value != "" && email.value != "" && number.value != ""){
        submitbutton.classList.add("hide")
        resulttext.innerHTML = "Thank You..!! <br>  I will contact you soon."
    }
}

function next(){
    let a = array.indexOf(projectimg.getAttribute("src")) + 1
    let c = array3.indexOf(demolink.getAttribute("href")) + 1
    let d = array2.indexOf(codelink.getAttribute("href")) + 1
    let b = array1.indexOf(projectname.innerHTML) + 1

    if (a === 4){
        a = 0
    }
    if(b === 4){
        b = 0
    }
    if(c === 4){
        c = 0
    }
    if(d === 4){
        d = 0
    }
    projectimg.setAttribute("src" , array[a])
    demolink.setAttribute("href" , array3[c])
    codelink.setAttribute("href" , array2[d])
    projectname.innerHTML = array1[b]
}
function previous(){
    let a = array.indexOf(projectimg.getAttribute("src")) - 1
    let c = array3.indexOf(demolink.getAttribute("href")) - 1
    let d = array2.indexOf(codelink.getAttribute("href")) - 1
    let b = array1.indexOf(projectname.innerHTML) - 1

    if (a === -1){
        a = 3
    }
    if(b === -1){
        b = 3
    }
    if(c === -1){
        c = 3
    }
    if(d === -1){
        d = 4
    }
    projectimg.setAttribute("src" , array[a])
    demolink.setAttribute("href" , array3[c])
    codelink.setAttribute("href" , array2[d])
    projectname.innerHTML = array1[b]
}