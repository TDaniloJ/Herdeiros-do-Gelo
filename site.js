(function () {
  'use strict';
  var button = document.querySelector('.to-top');
  if (!button) return;
  function update() { button.classList.toggle('visible', window.scrollY > 500); }
  button.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  window.addEventListener('scroll', update, { passive: true });
  update();
}());
