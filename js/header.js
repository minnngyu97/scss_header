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

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.lang-btn-wrap').forEach(function (btnWrap) {
    btnWrap.addEventListener('click', function (e) {
      e.preventDefault();
      document
        .querySelector('.hd-group .lang-btn-wrap')
        .classList.toggle('active');
    });
  });
});