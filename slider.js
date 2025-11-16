const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

let slideIndex=0;  //counter for the slides

const showSlides = () => {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    //to hide all the slides first
    for(let i=0; i < slides.length; i++){
        slides[i].style.display ="none";
    }

    //move to the next slide
    slideIndex++;

    //If we reach the end go back to the first slide
    if (slideIndex > slides.length){
        slideIndex=1;
    }

    //remove "active " from all dots
    for(let i=0; i <dots.length; i++){
        dots[i].classList.remove("active");
    }

    //show the current slide
    slides[slideIndex - 1].style.display = "block";

    // make the matching dot active
    dots[slideIndex - 1].classList.add("active");

    // change slide every 5 seconds
    setTimeout (showSlides, 5000);
};

showSlides(); //calls the function when the page loads

// optional: if you want to click dots to jump to a slide
  const currentSlide = (n) => {
    slideIndex = n - 1;
    showSlides();
  };
