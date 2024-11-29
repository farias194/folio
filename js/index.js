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



/*function bgChange(){

    const y = window.scrollY;
    if (y < 600){
document.getElementById('MasterProjectWrapper').style.backgroundColor='black'
}
else
document.getElementById('MasterProjectWrapper').style.backgroundColor='white'
}
window.addEventListener('scroll', bgChange)/*