// Show/hide menu //


const body = document.body;
const btn = document.getElementById('menu-btn');

btn.addEventListener ('click', _ => {body.classList.toggle('show') });

//mousedown event
// remove the focus ring for mouse users, 
//but keep it for keyboard users

