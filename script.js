document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const total = items.length;

  function getPosition(index) {
    const cols = 5;
    const colWidthVW = 18;
    const rowHeight = 450;

    const col = index % cols;
    const row = Math.floor(index / cols);

    const x = col * colWidthVW;
    const y = row * rowHeight;

    return { x, y };
  }

  imagesLoaded('#gallery')
    .on('progress', function (instance, image) {
      const item = image.img.closest('.item');
      const index = Array.from(items).indexOf(item);
      const { x, y } = getPosition(index);
      item.style.left = `${x}vw`;
      item.style.top = `${y}px`;
      item.style.zIndex = 10;
      item.classList.add('show');
    });
});
