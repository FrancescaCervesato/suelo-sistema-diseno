// SUELO Design System — helper genérico para los playgrounds interactivos
// de las páginas de componentes. Cambia atributos data-* del stage y
// el CSS (css/demo.css) reacciona mostrando el estado/variante elegido.
(function () {
  window.pgSet = function (btn, attr, value) {
    var group = btn.closest('.playground');
    if (!group) return;
    var stage = group.querySelector('.demo-stage');
    if (stage) stage.setAttribute('data-' + attr, value);
    var row = btn.closest('.control-row');
    if (row) {
      row.querySelectorAll('.control-btn').forEach(function (b) { b.classList.remove('is-active'); });
    }
    btn.classList.add('is-active');
  };

  window.pgToggle = function (btn, attr, onValue, offValue) {
    var group = btn.closest('.playground');
    var stage = group.querySelector('.demo-stage');
    var isOn = stage.getAttribute('data-' + attr) === onValue;
    stage.setAttribute('data-' + attr, isOn ? offValue : onValue);
    btn.classList.toggle('is-active', !isOn);
  };

  window.pgOpen = function (btn, selector) {
    var group = btn.closest('.playground');
    var el = group.querySelector(selector);
    if (el) el.classList.add('is-open');
  };
  window.pgClose = function (btn, selector) {
    var group = btn.closest('.playground');
    var el = group.querySelector(selector);
    if (el) el.classList.remove('is-open');
  };

  window.pgShowToast = function (btn, tipo) {
    var group = btn.closest('.playground');
    var toast = group.querySelector('.demo-toast');
    if (!toast) return;
    toast.setAttribute('data-tipo', tipo);
    toast.classList.add('is-visible');
    clearTimeout(toast._pgTimer);
    toast._pgTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2500);
  };

  window.pgSelectSegment = function (btn) {
    var parent = btn.parentElement;
    parent.querySelectorAll('span').forEach(function (s) { s.classList.remove('is-active'); });
    btn.classList.add('is-active');
  };

  window.pgSelectTab = function (btn, panelSelector) {
    var group = btn.closest('.demo-tabs');
    group.querySelectorAll('.demo-tabs__list span').forEach(function (s) { s.classList.remove('is-active'); });
    btn.classList.add('is-active');
    var panel = group.querySelector('.demo-tabs__panel');
    if (panel) panel.textContent = btn.getAttribute('data-panel-text') || panel.textContent;
  };

  window.pgSetPage = function (btn) {
    var parent = btn.parentElement;
    parent.querySelectorAll('button').forEach(function (b) { b.classList.remove('is-active'); });
    btn.classList.add('is-active');
  };

  window.pgSetProgress = function (input) {
    var group = input.closest('.playground');
    var fill = group.querySelector('.demo-progress-fill');
    var label = group.querySelector('.demo-progress-label');
    if (fill) fill.style.width = input.value + '%';
    if (label) label.textContent = input.value + '%';
  };

  window.pgStep = function (btn, dir) {
    var group = btn.closest('.playground');
    var dots = group.querySelectorAll('.demo-stepper__dot');
    var current = -1;
    dots.forEach(function (d, i) { if (d.classList.contains('is-current')) current = i; });
    var next = Math.min(dots.length - 1, Math.max(0, current + dir));
    dots.forEach(function (d, i) {
      d.classList.remove('is-current', 'is-done');
      if (i < next) d.classList.add('is-done');
      if (i === next) d.classList.add('is-current');
    });
  };

  window.pgToggleRow = function (checkbox) {
    var row = checkbox.closest('tr');
    if (row) row.classList.toggle('is-selected', checkbox.checked);
  };

  window.pgToggleChip = function (btn) {
    btn.classList.toggle('is-active');
    var stage = btn.closest('.demo-stage');
    if (stage) stage.setAttribute('data-variante', btn.classList.contains('is-active') ? 'seleccionado' : 'no-seleccionado');
  };

  window.pgSimulateUpload = function (btn) {
    var group = btn.closest('.playground');
    var stage = group.querySelector('.demo-stage');
    var text = group.querySelector('.demo-uploader span');
    stage.setAttribute('data-estado', 'cargando');
    if (text) text.textContent = 'Subiendo archivo…';
    setTimeout(function () {
      stage.setAttribute('data-estado', 'completo');
      if (text) text.textContent = 'archivo-final.pdf subido ✓';
    }, 1200);
  };
})();
