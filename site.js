(function () {
  'use strict';
  var bars = document.querySelectorAll('header.site .bar');
  bars.forEach(function (bar) {
    if (bar.querySelector('[data-language-control]')) return;
    var control = document.createElement('label');
    control.className = 'language-control';
    control.setAttribute('data-language-control', '');
    control.innerHTML = '<span>Idioma</span><select aria-label="Escolher idioma"><option value="pt-BR">Português (original)</option><option disabled>English (em breve)</option><option disabled>Español (em breve)</option></select>';
    bar.appendChild(control);
  });
  var button = document.querySelector('.to-top');
  if (!button) return;
  function update() { button.classList.toggle('visible', window.scrollY > 500); }
  button.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  window.addEventListener('scroll', update, { passive: true });
  update();
}());
