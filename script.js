document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#gallery');
  const items = Array.from(document.querySelectorAll('.item'));

  // Shuffle items before layout
  const shuffled = items.sort(() => Math.random() - 0.5);
  shuffled.forEach(item => grid.appendChild(item));

  const msnry = new Masonry(grid, {
    itemSelector: '.item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 10
  });

  imagesLoaded(grid)
    .on('progress', function (instance, image) {
      const item = image.img.closest('.item');
      item.classList.add('show');
      msnry.layout();
    });
});
