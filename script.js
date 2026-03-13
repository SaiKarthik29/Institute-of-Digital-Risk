// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});


// Scroll reveal animation

const sections = document.querySelectorAll("section");

function revealSections(){

const trigger = window.innerHeight * 0.85;

sections.forEach(section => {

const top = section.getBoundingClientRect().top;

if(top < trigger){
section.classList.add("show");
}

});

}

window.addEventListener("scroll", revealSections);
revealSections();


// Contact form

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your interest has been registered.");

form.reset();

});


// Active navbar link

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

document.querySelectorAll("section").forEach(section => {

const sectionTop = section.offsetTop - 120;

if(window.scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});
