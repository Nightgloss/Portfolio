document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const grid = document.querySelector('#gallery');

  imagesLoaded(grid)
    .on('progress', function (instance, image) {
      const item = image.img.closest('.item');
      item.classList.add('show');
      // Random scatter
      item.style.top = `${Math.random() * 2800}px`;
      item.style.left = `${Math.random() * 90}vw`;
      item.style.zIndex = Math.floor(Math.random() * 50);
    });
});
