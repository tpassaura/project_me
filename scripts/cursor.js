
// Define variables
const root = document.documentElement;
const size = 15;
const border = size * 2;
const unit = "px";
const cursor = document.querySelector('.cursor');
let cursorSize = `${size}${unit}`;
let cursor_sizeBorder = `${border}${unit}`;

// Create function to set the cursor size
function setCursorSize() {
  root.style.setProperty('--cursor_size', cursorSize);
 
}


function mouseMove() {
  // Add mousemove event listener to move the cursor
  document.addEventListener('mousemove', e => {
    const cursorCenter = size / 2;
    const top = e.clientY || e.pageY - window.scrollY;
    const left = e.clientX || e.pageX - window.scrollX;
    cursor.style.transform = `translate3d(${left - cursorCenter}px, ${top - cursorCenter}px, 0)`;
  });
}



// Add mousedown and mouseup event listeners to the document
document.addEventListener('mousedown', () => {
  cursor.classList.add('clicked');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('clicked');
});


setCursorSize();
mouseMove();


    