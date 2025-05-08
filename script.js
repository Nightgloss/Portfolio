document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const grid = document.querySelector('#gallery');
  const placedPositions = [];

  const spacing = 250; // minimum distance between items

  function isTooClose(x, y) {
    return placedPositions.some(pos => {
      const dx = pos.x - x;
      const dy = pos.y - y;
      return Math.sqrt(dx * dx + dy * dy) < spacing;
    });
  }

  function getRandomPosition(index, total) {
  const bandHeight = 2800 / total;
  let x, y, tries = 0;

  do {
    x = Math.random() * 90;
    y = index * bandHeight + Math.random() * bandHeight;
    tries++;
    if (tries > 1000) break;
  } while (isTooClose(x * 10, y));

  placedPositions.push({ x: x * 10, y });
  return { x, y };
}


  imagesLoaded(grid)
    .on('progress', function (instance, image) {
      const item = image.img.closest('.item');
      item.classList.add('show');

      const { x, y } = getRandomPosition(imageIndex, items.length);
      item.style.left = `${x}vw`;
      item.style.top = `${y}px`;
      item.style.zIndex = 10 + Math.floor(Math.random() * 10);
    });
});
