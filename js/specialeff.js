  document.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('click', function() {
      card.classList.toggle('flipped');
    });
    // adds keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        card.classList.toggle('flipped');
      }
    });
  });





 // Get all filter buttons and player cards
  const filterButtons = document.querySelectorAll('.filter-btn');
  const playerCards = document.querySelectorAll('.player-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // remove 'active' class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const position = btn.getAttribute('data-position');

      playerCards.forEach(card => {
        // showsall if "all" is selected
        if (position === 'all' || card.getAttribute('data-position') === position) {
          card.style.display = 'inline-block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  // 
  filterButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const position = btn.getAttribute('data-position');

    playerCards.forEach((card, i) => {
      if (position === 'all' || card.getAttribute('data-position') === position) {
        card.style.display = 'inline-block';
        card.style.opacity = 0;
        card.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
          card.style.opacity = 1;
          card.style.transform = 'scale(1)';
        }, 100 + i * 60); // Stagger animation by index
      } else {
        card.style.opacity = 0;
        card.style.transform = 'scale(0.8)';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  });
});