document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#gallery');
  const buttons = document.querySelectorAll('.img-btn');
  const items = document.querySelectorAll('.item');

  // Initialize Masonry
 const msnry = new Masonry(grid, {
  itemSelector: '.item',
  columnWidth: '.grid-sizer',
  gutter: 10,
  percentPosition: true
});

  // Fade in on load
  imagesLoaded(grid, () => {
    items.forEach(item => {
      item.classList.add('show');
    });
    msnry.layout();
  });

  // Filter logic with fade transitions
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      items.forEach(item => {
        item.classList.remove('show');
        if (filter === 'all' || item.classList.contains(filter)) {
          item.classList.remove('hidden');
          setTimeout(() => item.classList.add('show'), 10);
        } else {
          item.classList.add('hidden');
        }
      });

      setTimeout(() => msnry.layout(), 300);
    });
  });
});
