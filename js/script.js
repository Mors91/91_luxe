const header = document.querySelector('.header');
const navbar = document.querySelector('.header .flex .navbar');
const menuBtn = document.getElementById('menu-btn'); 

const toggleNavbar = () => {
  navbar.classList.toggle('active');
  menuBtn.classList.toggle('fa-xmark');
};

menuBtn.addEventListener('click', toggleNavbar);

window.onscroll = () => {
  menuBtn.classList.remove('fa-xmark');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    header.classList.add('active');
  }else {
    header.classList.remove('active');
  }

}