//1.  nav dark mode    MOUSEOVER
const getLogo = document.querySelector(".nav-container");
const blkBgMain= document.querySelector('.main-navigation');
getLogo.addEventListener('mouseover', ()  => {



const logoOptions = 
{
    color: "#9966FF",
    backgroundColor: "#000",
    duration: 2.5,
    textAlign: "center",
    ease: 'back'
};
gsap.to(getLogo, logoOptions);
gsap.to(blkBgMain, logoOptions);



//test code    
// getLogo.style.color = 'green';
// log(getLogo);
});



// 2. dark mode    WHEEL
const getBody = document.querySelector("body");
getBody.addEventListener('wheel', () => {


  const bodyOptions =
  {
    backgroundColor: "#000",
    color: "#BBB", 
    duration: 3,
    stagger: 0.5
  }; 
  gsap.to(getBody, bodyOptions);
  
  


//   getBody.style.backgroundColor = "black";
//   getBody.style.color = "white";
//test code
//log("Got me Pardner", getBody);
});


//3. Bigfoot mode    COPY
const bigFoot = document.querySelector('.footer');
bigFoot.addEventListener('copy', () => {


  const footOptions = 
  {
     fontSize: "5rem",
     color: "#FFF",
     backgroundColor: "#000"
  };
  gsap.to(bigFoot, footOptions);
  



//Test code  
//   bigFoot.children[0].textContent = "What big FEET you have, Grandma!?!"
//   log(bigFoot);
});


//4. Change funBus Picture   DRAG

const funSwap = document.querySelector('img');
funSwap.addEventListener('drag', () => {


const swapOptions = 
{
    opacity: 0.4,
    duration: 3,
    scale: 0
};

gsap.to(funSwap, swapOptions);
funSwap.setAttribute('src', "https://assets.codepen.io/4996277/flowers-1600001049964-4803.jpg")




//test code
// funSwap.setAttribute('src', "https://assets.codepen.io/4996277/flowers-1600001049964-4803.jpg")
// log(funSwap);
}); 


//5. Change Welcome    MOUSEENTER

const welcomeSwap = document.querySelector('.intro');
welcomeSwap.addEventListener('mouseenter', () => {


const welcomeOptions = 
{
    stagger: 0.5,
    duration: 2,
    width: "80%", 
    x: 100
};
gsap.to(welcomeSwap, welcomeOptions);




//Test code
// welcomeSwap.children[2].textContent = "Hi Grandma! It's Nice to See you.";
// welcomeSwap.children[2].fontSize = "x-large";
// log(welcomeSwap.children[2]);
});



//6. grab adventure pic picture   CUT 

const grabAdventure = document.querySelector('.img-content');
grabAdventure.addEventListener('cut', () => {
grabAdventure.children[0].setAttribute('src', "https://assets.codepen.io/4996277/pexels-gustavo-fring-4172918.jpg?width=400&format=auto");
log(grabAdventure);
});


//7. grab fun pic picture  CLICK

const grabFunImg = document.querySelector('.img-fluid');
grabFunImg.addEventListener('click', () => {
grabFunImg.setAttribute('src', "https://assets.codepen.io/4996277/pexels-pixabay-274973.jpg?width=400&format=auto");
 

const funImgOpt =
{
    opacity: 0,
    scale: 0,
    duration: 4,
    borderRadius: '100%'
};
gsap.to(grabFunImg, funImgOpt);
});




//8. animate let's go DRAGEND

const letsGo = document.querySelector('.content-section');
letsGo.addEventListener('dragend', () => {

 const goOptions = 
 {
    border: "5px",
    backgroundColor: "#444",
    duration: 2.5,
    fontSize: "36px"
 };
 gsap.to(letsGo, goOptions);
 



//test code   
// letsGo.children[0].children[0].textContent = "We're On Our WAY!!!";
// letsGo.children[0].children[0].style.color = "#446A8C";
});


//9. animate adventure awaits AUXCLICK

const animateAdv = document.querySelector('.destination');
animateAdv.addEventListener('auxclick', () => {


const advOptions = 
{
    background: "#FFF",
    color: "#000",
    duration: 3,
    stagger: 1,
};
gsap.to(animateAdv, advOptions);




//Test code
// animateAdv.textContent = "Yes Please";
// animateAdv.style.color = "red";
// animateAdv.style.fontSize = "x-large";
// log(animateAdv);
});


// 10. change nav locations DBLCLICK

const changeNav = document.querySelector('.nav-link');
changeNav.addEventListener('dblclick', () => {
changeNav.setAttribute('href', "https://condescending-colden-9200c2.netlify.app");
//preventDefault used to stop navigation refresh
//event.preventDefault();
log(changeNav);
});
