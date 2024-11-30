
const nav= document.getElementById('nav');
 const navC = nav.children;
window.addEventListener('scroll', scrollnav);

function scrollnav(){
var y = window.scrollY;
if ( y>1){
    for (var i = 0; i <navC.length; i++){

        navC[i].classList.add('navScroll')
    }
}
    else{
        for (var i = 0; i < navC.length;i++){
            navC[i].classList.remove('navScroll');

        }
    }
}
    
const overlayName = document.querySelectorAll('.projectName a')

console.log(overlayName)


const project = document.querySelectorAll('.project');

/*const changeBackGroundOnScroll =() =>{
    project.forEach((project) => {
        const projectBorder = project.getBoundingClientRect();
        if (projectBorder.top <= window.innerHeight / 2 && projectBorder.bottom >= window.innerHeight / 2 ){
            document.getElementById('MasterProjectWrapper').style.background = project.getAttribute('data-bg-gradient');
        }
    });
};

window.addEventListener('scroll', changeBackGroundOnScroll);
console.log(document.getElementById('MasterProjectWrapper'));

*/


const texts = document.querySelectorAll('.carouselText');
let currentIndex = 0;


const showText = (index)=> {
    texts.forEach((text, i ) =>{
        if (i == index ){
            text.style.opacity = 1;

        }
        else{
            text.style.opacity= 0;
        }
    })
}

const startCarousel = () =>{
    showText (currentIndex);
    setInterval(() =>{
        currentIndex= (currentIndex + 1) % texts.length;
        showText(currentIndex)
    }, 3000)
}
startCarousel();
/*function bgChange(){

    const y = window.scrollY;
    if (y < 600){
document.getElementById('MasterProjectWrapper').style.backgroundColor='black'
}
else
document.getElementById('MasterProjectWrapper').style.backgroundColor='white'
}
window.addEventListener('scroll', bgChange)*/