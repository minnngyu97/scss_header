document.querySelectorAll('.nav-list li').forEach(function(item) {
  item.addEventListener('mouseenter', function() {
    let sub = this.querySelector('.sub');
    if (sub) {
      sub.classList.add('show');
    }
  });

  item.addEventListener('mouseleave', function() {
    let sub = this.querySelector('.sub');
    if (sub) {
      sub.classList.remove('show');
    }
  });
});