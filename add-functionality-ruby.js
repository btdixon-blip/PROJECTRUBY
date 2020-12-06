// DOM elements
const rotateLeftButton = document.getElementById('rotate-left-button');
const rotateRightButton = document.getElementById('rotate-right-button');
const rubyBorder = document.getElementById('ruby-border');
const rubyForm = document.getElementById('ruby-form');

// global variables
let rotation = 0;

// event handlers
function toggleRuby() {
    console.log('FIRING')
    const ruby = document.getElementById('toggle-ruby');
    toggleVisibility(ruby);
}

function rotateRuby(event) {
    const ruby = document.getElementById('small-ruby');
    rotate(ruby, event);
}

function addGreet(event) {
    event.preventDefault();
    const greet = rubyForm.greet.value;
    const newGreetLi = document.createElement('li');
    const newGreetAvatar = document.createElement('div');
    newGreetAvatar.className = "avatar";
    const newGreetText = document.createElement('span');
    newGreetText.innerText = greet;
    const greets = document.getElementById('greets').getElementsByTagName('ul')[0];
    const newerGreetLi = greets.appendChild(newGreetLi);
    newerGreetLi.appendChild(newGreetAvatar);
    newerGreetLi.appendChild(newGreetText);
    gritterForm.greet.value = "";
}


// helpers
// given a DOM element, change it's visibilty style property from hidden to visible
function toggleVisibility(element) {
    if (element.style.visibility === 'hidden') {
        element.style.visibility = 'visible'
    } else {
        element.style.visibility = 'hidden'
    }
}

// given a DOM element and a direction, rotate the element that direction
function rotate(element, event) {
    if (event.target.id === 'rotate-left-button') {
        rotation = rotation - 15;
    } else {
        rotation = rotation + 15;
    }
    element.style.transform = 'rotate(' + rotation + 'deg)';
}

// add event handlers when mouse events are triggered
rubyBorder.onmouseenter = toggleRuby;
rubyBorder.onmouseleave = toggleRuby;
rotateLeftButton.onclick = rotateRuby;
rotateRightButton.onclick = rotateRuby;
rubyForm.onsubmit = addGreet;
