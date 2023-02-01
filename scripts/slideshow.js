const image1={
    file:"images/back_beach_sorrento.jpg",
    description:"View of the beach",
    alt:"View of the beach"
}
const image2={
    file:"images/sorrento_from_jetty.jpg",
    description:"Sorrento from the jetty",
    alt:"Sorrento from the jetty"
}
const image3={
    file:"images/apartment_garden.jpg",
    description:"The garden in front of the apartment",
    alt:"The garden in front of the apartment"
}
const image4={
    file:"images/apartment_front.jpg",
    description:"The front of the apartment",
    alt:"The front of the apartment"
}
const image5={
    file:"images/apartment_bath.jpg",
    description:"The apartment bathroom",
    alt:"The apartment bathroom"
}
const image6={
    file:"images/ocean_beach.jpg",
    description:"The beach view 1",
    alt:"The beach"
}
const image7={
    file:"images/ocean_beach_2.jpg",
    description:"The beach view 2",
    alt:"The beach"
}
const image8={
    file:"images/ocean_beach3.jpg",
    description:"The beach view 3",
    alt:"The beach"
}

const images= [image1, image2, image3, image4, image5, image6, image7, image8];

const slide = document.querySelector(".slide img")
const description = document.querySelector(".slide .description")

const previous=document.querySelector(".previous");
const next=document.querySelector(".next");

previous.addEventListener('click', previousFunction);
next.addEventListener('click', nextFunction);

var slideIndex=0;
/**
 * increases the slide index to cycle forwards through an array of images
 */
function nextFunction(){
    slideIndex++;
    showSlideshow();
}
/**
 * decreases the slide index to cycle backwards through an array of images
 */
function previousFunction(){
    slideIndex--;
    showSlideshow();
}

window.addEventListener('load', showSlideshow);
/**
 * This function loads the contents of the slideshow
 */
function showSlideshow(){

    if(slideIndex == images.length){
        slideIndex =0;
    }
    if(slideIndex == -1){
        slideIndex = images.length-1;
    }
    slide.src=images[slideIndex].file;
    slide.alt=images[slideIndex].alt;
    description.innerHTML=images[slideIndex].description;
    
}

