// document.querySelectorAll('.nav-list li').forEach(function(item) {
//   item.addEventListener('mouseenter', function() {
//     let sub = this.querySelector('.sub');
//     if (sub) {
//       sub.classList.add('show');
//     }
//   });

//   item.addEventListener('mouseleave', function() {
//     let sub = this.querySelector('.sub');
//     if (sub) {
//       sub.classList.remove('show');
//     }
//   });
// });



document.addEventListener('DOMContentLoaded', function () {
  function initMenuEvents() {
    const isMobile = window.matchMedia("(max-width: 992px)").matches;
    const menuItems = document.querySelectorAll('.nav-list > li');

    menuItems.forEach(item => {
      item.replaceWith(item.cloneNode(true));
    });

    if (isMobile) {
      document.querySelectorAll('.nav-list > li').forEach(item => {
        const subMenu = item.querySelector('.sub');
        if (subMenu) {
          item.addEventListener('click', function (e) {
            e.preventDefault();
            subMenu.classList.toggle('show');
          });
        }
      });

      const menuBtn = document.querySelector('.menu-btn');
      const navWrap = document.querySelector('.nav-wrap');
      if (menuBtn && navWrap) {
        menuBtn.addEventListener('click', () => {
          navWrap.classList.toggle('open');
          document.body.classList.toggle('menu-open');
        });
      }

    } else {
      document.querySelectorAll('.nav-list > li').forEach(item => {
        const subMenu = item.querySelector('.sub');
        if (subMenu) {
          item.addEventListener('mouseenter', () => {
            subMenu.classList.add('show');
          });
          item.addEventListener('mouseleave', () => {
            subMenu.classList.remove('show');
          });
        }
      });
    }
  }

  initMenuEvents();

  window.addEventListener('resize', initMenuEvents);
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