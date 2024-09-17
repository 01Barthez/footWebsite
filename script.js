// const
const menuToggle = document.querySelector('#menuToggle');
const sideBar = document.querySelector('#sideBar');

// Events
menuToggle.addEventListener('click', ()=>{
    sideBar.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
})

sideBar.addEventListener('click', ()=>{
    const menuToggleActive = document.querySelector('is-active');
    if(window.innerWidth <= 768  && menuToggleActive){
        sideBar.classList.toggle('active');
        menuToggle.classList.toggle('is-active');    
    }
})

    // Move the wrapper
let step = 100; 
let steFilter = 60;
let scrolling =true;

const previous = document.querySelector(".previous"), next = document.querySelector(".next"); 
previous.addEventListener('click', (e)=>{
    e.preventDefault();
    let highlightWrapper = document.querySelector(".highlight-wrapper");
    highlightWrapper.animate({
        scrollLeft: "-=" +step+ "px"
    });
});

next.addEventListener('click', (e)=>{
    e.preventDefault();
    let highlightWrapper = document.querySelector(".highlight-wrapper");
    highlightWrapper.animate({
        scrollLeft: "+=" +step+ "px"
    });
});


// functions
