// JavaScript for navigation effect on scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

// JavaScript for responsive sidebar
var menu = document.querySelector('.menu');
var menubtn = document.querySelector('.menu-btn'); 
var closebtn = document.querySelector('.close-btn'); 

menubtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closebtn.addEventListener("click", () => {
  menu.classList.remove('active');
});
