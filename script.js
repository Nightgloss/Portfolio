document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const placedPositions = [];

 const spacing = 80;
  const total = items.length;

  function isTooClose(x, y) {
    return placedPositions.some(pos => {
      const dx = pos.x - x;
      const dy = pos.y - y;
      return Math.sqrt(dx * dx + dy * dy) < spacing;
    });
  }

  function getRandomPosition(index) {
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

  items.forEach((item, index) => {
    const img = item.querySelector('img');

    imagesLoaded(img, () => {
      const { x, y } = getRandomPosition(index);
      item.style.left = `${x}vw`;
      item.style.top = `${y}px`;
      item.style.zIndex = 10 + Math.floor(Math.random() * 10);
      item.classList.add('show');
    });
  });
});
