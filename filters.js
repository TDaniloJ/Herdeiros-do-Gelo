(function () {
  'use strict';
  var input = document.querySelector('[data-filter-search]');
  var select = document.querySelector('[data-filter-type]');
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-character-card]'));
  var status = document.querySelector('[data-filter-status]');
  var empty = document.querySelector('.filter-empty');
  if (!input || !cards.length) return;

  function filter() {
    var query = input.value.trim().toLowerCase();
    var type = select ? select.value : 'todos';
    var visible = 0;
    cards.forEach(function (card) {
      var matchesText = !query || card.textContent.toLowerCase().indexOf(query) !== -1;
      var matchesType = type === 'todos' || card.dataset.characterType === type;
      var show = matchesText && matchesType;
      card.hidden = !show;
      if (show) visible++;
    });
    if (status) status.textContent = visible + ' ' + (visible === 1 ? 'personagem encontrado' : 'personagens encontrados');
    if (empty) empty.style.display = visible ? 'none' : 'block';
  }
  input.addEventListener('input', filter);
  if (select) select.addEventListener('change', filter);
  filter();
}());
