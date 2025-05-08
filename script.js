document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const grid = document.querySelector('#gallery');

  let imageIndex = 0;

  imagesLoaded(grid)
    .on('progress', function (instance, image) {
      const item = image.img.closest('.item');
      item.classList.add('show');

      // Calculate position manually
      const col = imageIndex % 6;
      const row = Math.floor(imageIndex / 6);
      const baseTop = row * 380 + Math.random() * 30;
      const baseLeft = col * 16 + Math.random() * 4;

      item.style.top = `${baseTop}px`;
      item.style.left = `${baseLeft}vw`;
      item.style.zIndex = 10 + Math.floor(Math.random() * 10);

      imageIndex++;
    });
});
