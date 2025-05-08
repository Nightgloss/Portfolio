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
  const cols = 5; // fewer columns = more space per image
  const colWidthVW = 18; // how much horizontal space each "column" takes
  const rowHeight = 450; // taller rows = fewer dense clusters

  const col = index % cols;
  const row = Math.floor(index / cols);

  // Add small randomized offsets
  const x = col * colWidthVW + (Math.random() * 6 - 3); // ~±3vw
  const y = row * rowHeight + (Math.random() * 60 - 30); // ~±30px

  placedPositions.push({ x: x * 10, y }); // optional: keep for collision check
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
