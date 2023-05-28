const hamburger = document.getElementById('hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

// toggle class active hamburger menu
hamburger.addEventListener('click', (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
});

// klik diluar hamburger menu
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
})

// toggle class active untuk search box
const searchForm = document.querySelector('.search-form');
const searchBox = document.getElementById('search-box');
const searchButton = document.querySelector('#search-button')

searchButton.onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
}

// klik diluar search form dan search button
document.addEventListener('click', (e) => {
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active')
  }
})

// klik shopping cart button
const shopCartBtn = document.getElementById('shopping-cart-button');
const shopCart = document.querySelector('.shopping-cart');

shopCartBtn.addEventListener('click', (e) => {
  shopCart.classList.toggle('active');
  e.preventDefault();
});

// klik diluar shopping cart dam shopping cart button
document.addEventListener('click', (e) => {
  if (!shopCartBtn.contains(e.target) && !shopCart.contains(e.target)) {
    shopCart.classList.remove('active');
  }
});

// klik item detail button
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach(item => {
  item.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  }
})

// close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
}

// klik diluar modal container
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
}