const buttons = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('.item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Set active state
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});
