document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#gallery');
  const items = Array.from(document.querySelectorAll('.item'));

  // Shuffle image order before inserting
  const shuffled = items.sort(() => Math.random() - 0.5);
  shuffled.forEach(item => grid.appendChild(item));

  // Fade each one in as it loads
  imagesLoaded(grid)
    .on('progress', function (instance, image) {
      const item = image.img.closest('.item');
      item.classList.add('show');
    });
});
