document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const grid = document.querySelector('#gallery');

  imagesLoaded(grid)
  .on('progress', function (instance, image, i) {
    const item = image.img.closest('.item');
    item.classList.add('show');

    // Fake randomness using a loose grid system
    const col = i % 6;
const row = Math.floor(i / 6);
const baseTop = row * 380 + Math.random() * 30;
const baseLeft = col * 16 + Math.random() * 4;
    item.style.top = `${baseTop}px`;
    item.style.left = `${baseLeft}vw`;
    item.style.zIndex = 10 + Math.floor(Math.random() * 10);
  });

});
