
const checkbox = document.getElementById('adaptive_checkbox');
const menuContainer = document.querySelector('.section-two__menu_container');

checkbox.addEventListener('change', function() {
 
  if (this.checked) {
    menuContainer.style.display = 'flex';
  } else {
    menuContainer.style.display = 'none';
  }
});
