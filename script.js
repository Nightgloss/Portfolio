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
    const baseTop = row * 350 + Math.random() * 30; // ~350px spacing + slight nudge
    const baseLeft = col * 16 + Math.random() * 4;   // 16vw spacing + slight nudge

    item.style.top = `${baseTop}px`;
    item.style.left = `${baseLeft}vw`;
    item.style.zIndex = 10 + Math.floor(Math.random() * 10);
  });

});
