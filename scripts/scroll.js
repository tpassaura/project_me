let section = document.querySelectorAll('section');
let menu = document.querySelectorAll('.nav_left > a');
window.onscroll = () => {
  section.forEach(i => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute('id');
    if (top >= offset && top < offset + height) {
      menu.forEach(link => {
        link.classList.remove('active');
        document.querySelector('.nav_left > a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};