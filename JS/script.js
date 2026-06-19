
// Welcome message
window.addEventListener("load", function(){

document.body.style.opacity = "1";

});


// Fade effect
document.body.style.opacity = "0";
document.body.style.transition = "1s";


// Form submission

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

alert("Thank you! Your information has been submitted successfully.");

form.reset();

});

}


// Button hover effect

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("mouseover", ()=>{

button.style.transform="scale(1.1)";

});

button.addEventListener("mouseout", ()=>{

button.style.transform="scale(1)";

});

});


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// FAQ toggle

const questions = document.querySelectorAll(".question");

questions.forEach(question=>{

question.addEventListener("click",()=>{

question.classList.toggle("active");

});

});


// Image effect

const images = document.querySelectorAll("img");

images.forEach(image=>{

image.addEventListener("mouseover",()=>{

image.style.transform="scale(1.05)";

});

image.addEventListener("mouseout",()=>{

image.style.transform="scale(1)";

});

});
