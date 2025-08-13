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

document.querySelectorAll('.trigger').forEach(trigger => {
  trigger.addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.hd-nav').classList.toggle('open');
  });
});

document.querySelectorAll('section, .menu a').forEach(element => {
  element.addEventListener('click', function() {
    document.querySelector('.hd-nav').classList.remove('open');
    document.querySelectorAll('.trigger').forEach(trigger => {
      trigger.classList.remove('active');
    });
  });
});