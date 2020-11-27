const rubyBorder = document.getElementById('ruby-border');
const rubyForm = document.getElementById('ruby-form');


// event handlers
function toggleRuby() {
    console.log('FIRING')
    const ruby = document.getElementById('toggle-ruby');
    toggleVisibility(ruby);
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


// add event handlers when mouse events are triggered
rubyBorder.onmouseenter = toggleRuby;
rubyBorder.onmouseleave = toggleRuby;
