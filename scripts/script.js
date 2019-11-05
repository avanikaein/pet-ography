// Show/hide menu //

// select the html elements that we need to interact with //

const body = document.body;
const btn = document.getElementById('menu-btn');

//create our event handlers

//click event
//toggle a "show" class on/off the body element

btn.addEventListener ('click', _ => {body.classList.toggle('show') });

//mousedown event
// remove the focus ring for mouse users, 
//but keep it for keyboard users

btn.addEventListener('mousedown', (e)=> {e.preventDefault});
