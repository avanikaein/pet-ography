// Back to Top button animation
$('.gototop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});


// Show/hide menu //


const body = document.body;
const btn = document.getElementById('menu-btn');

btn.addEventListener ('click', _ => {body.classList.toggle('show') });

btn.addEventListener('mousedown', (e)=> {e.preventDefault});

