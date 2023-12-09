
const Book = document.querySelector("#btn")

const Note = document.querySelector("#notParent")

const Name = document.querySelector("#name")

const Number = document.querySelector("#number")

const People = document.querySelector("#people")

Book.addEventListener("click", function(e){
  e.preventDefault()
    if(Name.value != '' && Number.value!= '' && People.value !=''){
        const NewDive = document.createElement('div')
        NewDive.innerHTML ="Name: "+ Name.value
        NewDive.innerHTML += `<br> Number:  ${Number.value}`
        NewDive.innerHTML += `<br> Qofka: ${People.value}`
        Note.appendChild(NewDive)
        NewDive.style.backgroundColor = '#FAEBD7'
        NewDive.style.padding = '15px'
        NewDive.style.width ='200px'
        NewDive.style.color = 'black'
        model.style.display = 'none'

    }

    Name.value=" "
    Number.value=" "
    People.value=" "
    
})



//Menu Open Close
const navbar = document.querySelector('.navbar');

const button = document.querySelector('#openbtn')

const butonclose = document.querySelector('#closebtn')

button.addEventListener("click", function(){
    butonclose.style.display="block"
    button.style.display="none"
    navbar.style.position="absolute";
    navbar.style.top= "110%";
    navbar.style.left="50%";
    navbar.style.transform="translate(-50%)";
    navbar.style.transform="translate(-50%)";
    navbar.style.width="90vh";
    navbar.style.width="90vh";
    navbar.style.background="var(--text-color)";
    navbar.style.display="flex";
    navbar.style.flexDirection= column;
    navbar.style.alignItems= "center";
    navbar.style.padding="20px";
    navbar.style.borderRadius="2rem";
})

butonclose.addEventListener("click", function(){
    navbar.style.display ="none"
    butonclose.style.display="none"
    button.style.display="block"
})

//ScrollReveal Animation
const animate = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: '2500',
    delay: '400',
});

animate.reveal('.nav')
animate.reveal(".hom-text", {origin: "left"})
animate.reveal(".hom-image", {origin: "button"})
animate.reveal(".ser-box, .product-box, .book-data", {interval: "100"})



