document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const grid = document.querySelector('#gallery');
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
    const cols = 5;
    const colWidthVW = 18;
    const rowHeight = 450;

    const col = index % cols;
    const row = Math.floor(index / cols);

    const x = col * colWidthVW + (Math.random() * 6 - 3);
    const y = row * rowHeight + (Math.random() * 60 - 30);

    placedPositions.push({ x: x * 10, y });
    return { x, y };
  }

  imagesLoaded(grid, () => {
    // Shuffle AFTER images are loaded
    const shuffledItems = Array.from(items).sort(() => Math.random() - 0.5);

    shuffledItems.forEach((item, index) => {
      const { x, y } = getRandomPosition(index);
      item.style.left = `${x}vw`;
      item.style.top = `${y}px`;
      item.style.zIndex = 10 + Math.floor(Math.random() * 10);
      item.classList.add('show');
    });
  });
});
