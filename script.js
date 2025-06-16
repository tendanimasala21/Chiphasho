function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

function toggleImages(button) {
  const moreImages = button.previousElementSibling;
  moreImages.classList.toggle('visible');
  button.textContent = moreImages.classList.contains('visible') ? 'Show Less' : 'Show More';
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }
});

