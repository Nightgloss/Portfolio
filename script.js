document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#gallery');
  const buttons = document.querySelectorAll('.img-btn');
  const items = document.querySelectorAll('.item');

  const msnry = new Masonry(grid, {
    itemSelector: '.item',
    columnWidth: '.grid-sizer',
    gutter: 10,
    percentPosition: true
  });

  imagesLoaded(grid, () => {
  items.forEach((item, i) => {
    item.classList.add(`fade-delay-${(i % 5) + 1}`); // rotate through delay classes
    item.classList.add('show');
  });
  msnry.layout();
});

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
