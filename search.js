(function () {
  'use strict';
  var index = [
    { title: 'Início', url: 'index.html', text: 'Herdeiros do Gelo fantasia drama mistério Ren Glace' },
    { title: 'O Mundo', url: 'mundo.html', text: 'Gaia Patronas Nevanthia distritos Guarda QI maldições Grande Reunião' },
    { title: 'Personagens', url: 'personagens.html', text: 'Ren Isolde Theron Glace Kyrion Fenn Casa Voss personagens' },
    { title: 'Capítulos', url: 'capitulos.html', text: 'volumes capítulos publicados leitura' },
    { title: 'Capítulo 1 — A história dos deuses', url: 'capitulo-1.html', text: 'deuses Ren Nevanthia Grande Reunião' },
    { title: 'Capítulo 2 — A explosão', url: 'capitulo-2.html', text: 'explosão Distrito das Cinzas Dragoa Patronas' },
    { title: 'Apêndices', url: 'apendices.html', text: 'linha do tempo mapa glossário ganchos' }
  ];
  var form = document.querySelector('[data-site-search]');
  var input = form && form.querySelector('input');
  var results = document.querySelector('[data-search-results]');
  if (!form || !input || !results) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var query = input.value.trim().toLowerCase();
    results.innerHTML = '';
    if (!query) { results.hidden = true; return; }
    var matches = index.filter(function (item) {
      return (item.title + ' ' + item.text).toLowerCase().indexOf(query) !== -1;
    });
    matches.forEach(function (item) {
      var link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.title;
      results.appendChild(link);
    });
    if (!matches.length) results.textContent = 'Nenhum resultado encontrado.';
    results.hidden = false;
  });
}());
