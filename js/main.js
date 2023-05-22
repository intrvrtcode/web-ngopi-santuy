const hamburger = document.getElementById('hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

// toggle class active 
hamburger.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

// remove class actove
document.addEventListener('click', (e) => {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
})

console.log(${{ secrets.TEST }})
