// Your code 

//1.  test make logo green    MOUSEOVER
const getLogo = document.querySelector(".logo-heading");
getLogo.addEventListener('mouseover', ()  => {
getLogo.style.color = 'green';
log(getLogo);
});


// 2. dark mode    WHEEL
const getBody = document.querySelector("body");
getBody.addEventListener('wheel', () => {
  getBody.style.backgroundColor = "black";
  getBody.style.color = "white";
  log("Got me Pardner", getBody);
});


//3. Bigfoot mode    COPY
const bigFoot = document.querySelector('.footer');
bigFoot.addEventListener('copy', () => {
  bigFoot.children[0].textContent = "What big FEET you have, Grandma!?!"
  log(bigFoot);
});


//4. Change funBus Picture   DRAG

const funSwap = document.querySelector('img');
funSwap.addEventListener('drag', () => {
funSwap.setAttribute('src', "https://assets.codepen.io/4996277/flowers-1600001049964-4803.jpg")
log(funSwap);
}); 


//5. Change Welcome    MOUSEENTER

const welcomeSwap = document.querySelector('.intro');
welcomeSwap.addEventListener('mouseenter', () => {
welcomeSwap.children[2].textContent = "Hi Grandma! It's Nice to See you.";
welcomeSwap.children[2].fontSize = "x-large";
log(welcomeSwap.children[2]);
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
});


//8. animate let's go DRAGEND

const letsGo = document.querySelector('.content-section');
letsGo.addEventListener('dragend', () => {
letsGo.children[0].children[0].textContent = "We're On Our WAY!!!";
letsGo.children[0].children[0].style.color = "#446A8C";
});


//9. animate adventure awaits

const animateAdv = document.querySelector('.destination');
animateAdv.addEventListener('auxclick', () => {
animateAdv.textContent = "Yes Please";
animateAdv.style.color = "red";
animateAdv.style.fontSize = "x-large";
log(animateAdv);
});


// 10. change nav locations DBLCLICK

const changeNav = document.querySelector('.nav-link');
changeNav.addEventListener('dblclick', () => {
changeNav.setAttribute('href', "https://condescending-colden-9200c2.netlify.app");
//preventDefault used to stop navigation refresh
event.preventDefault();
log(changeNav);
});

//11. propagation 
Array.from(document.querySelector('.logo-heading')).forEach((element) => {
element.addEventListener('wheel', () => {
console.log("target", element.target);
});
});
 here
