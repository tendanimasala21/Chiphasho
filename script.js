function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

function toggleImages(button) {
  const moreImages = button.previousElementSibling.querySelector('.more-images');

  if (moreImages.classList.contains('visible')) {
    moreImages.classList.remove('visible');
    moreImages.classList.add('hidden');
    button.textContent = "Show More";
  } else {
    moreImages.classList.remove('hidden');
    moreImages.classList.add('visible');
    button.textContent = "Show Less";
  }
}


window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }
});

