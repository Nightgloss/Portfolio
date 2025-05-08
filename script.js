document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const grid = document.querySelector('#gallery');
  const total = items.length;

  function getRandomPosition(index) {
    const maxX = 80; // avoid right overflow
    const maxY = 3000;

    const x = Math.random() * maxX;
    const y = (index / total) * maxY + Math.random() * 100 - 50;

    return { x, y };
  }

  // Shuffle items for organic randomness
  const shuffledItems = Array.from(items).sort(() => Math.random() - 0.5);

  imagesLoaded(grid)
    .on('progress', function (instance, image) {
      const item = image.img.closest('.item');
      const index = shuffledItems.indexOf(item);
      const { x, y } = getRandomPosition(index);
      item.style.left = `${x}vw`;
      item.style.top = `${y}px`;
      item.style.zIndex = 10 + Math.floor(Math.random() * 20);
      item.classList.add('show');
    });
});
