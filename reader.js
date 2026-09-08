(function () {
  'use strict';

  var body = document.body;
  var chapter = document.querySelector('.chapter-body');
  var progress = document.querySelector('.reading-progress span');
  var topButton = document.querySelector('.to-top');
  var sizeOutput = document.querySelector('[data-reader-size]');
  var sizes = [16, 18, 20, 22];
  var sizeIndex = Number(localStorage.getItem('reader-size-index') || 1);
  var theme = localStorage.getItem('reader-theme') || 'dark';
  var chapterKey = location.pathname.split(/[\\/]/).pop();
  var chapterTitle = document.querySelector('h1')?.textContent || 'Capítulo';

  function applyPreferences() {
    body.classList.toggle('theme-light', theme === 'light');
    body.classList.toggle('theme-sepia', theme === 'sepia');
    if (chapter) chapter.style.fontSize = sizes[sizeIndex] + 'px';
    if (sizeOutput) sizeOutput.textContent = sizes[sizeIndex] + 'px';
  }

  function updateProgress() {
    if (!chapter || !progress) return;
    var bounds = chapter.getBoundingClientRect();
    var total = chapter.scrollHeight - window.innerHeight;
    var current = Math.max(0, -bounds.top);
    progress.style.width = Math.min(100, Math.max(0, current / total * 100)) + '%';
    if (topButton) topButton.classList.toggle('visible', window.scrollY > 500);
  }

  if (chapter && chapterKey) {
    localStorage.setItem('last-chapter-url', chapterKey);
    localStorage.setItem('last-chapter-title', chapterTitle);
  }

  document.querySelector('[data-reader-action="decrease"]')?.addEventListener('click', function () {
    sizeIndex = Math.max(0, sizeIndex - 1);
    localStorage.setItem('reader-size-index', sizeIndex);
    applyPreferences();
  });
  document.querySelector('[data-reader-action="increase"]')?.addEventListener('click', function () {
    sizeIndex = Math.min(sizes.length - 1, sizeIndex + 1);
    localStorage.setItem('reader-size-index', sizeIndex);
    applyPreferences();
  });
  document.querySelector('[data-reader-action="theme"]')?.addEventListener('click', function () {
    theme = theme === 'dark' ? 'sepia' : theme === 'sepia' ? 'light' : 'dark';
    localStorage.setItem('reader-theme', theme);
    applyPreferences();
  });
  document.querySelector('[data-reader-action="print"]')?.addEventListener('click', function () {
    window.print();
  });
  topButton?.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  window.addEventListener('scroll', updateProgress, { passive: true });
  applyPreferences();
  updateProgress();
}());
