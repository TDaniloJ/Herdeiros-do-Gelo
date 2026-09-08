(function () {
  'use strict';
  var box = document.querySelector('[data-continue-reading]');
  var link = document.querySelector('[data-continue-link]');
  if (!box || !link) return;
  var url = localStorage.getItem('last-chapter-url');
  var title = localStorage.getItem('last-chapter-title');
  if (!url || !/^capitulo-\d+\.html$/.test(url)) return;
  link.href = url;
  link.textContent = title ? 'Continuar: ' + title + ' →' : 'Continuar a leitura →';
  box.hidden = false;
}());
