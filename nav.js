// SUELO Design System — inyecta el sidebar de navegación en cada página
// y marca como activo el link de la página actual (data-page en <body>).
(function () {
  var NAV_ITEMS = [
    { label: "Inicio", href: "index.html", page: "inicio" },
    { label: "Tokens de Color", href: "tokens-de-color.html", page: "tokens-de-color" },
    { label: "Tipografía", href: "tipografia.html", page: "tipografia" },
    { group: "BIBLIOTECA" },
    { label: "Componentes", href: "componentes.html", page: "componentes" },
    { label: "Botones", href: "botones.html", page: "botones" },
    { label: "Controles", href: "controles.html", page: "controles" },
    { label: "Formularios", href: "formularios.html", page: "formularios" },
    { label: "Navegación", href: "navegacion.html", page: "navegacion" },
    { label: "Retroalimentación", href: "feedback.html", page: "feedback" },
    { label: "Datos y Tablas", href: "datos-tablas.html", page: "datos-tablas" },
    { label: "Organismos", href: "organismos.html", page: "organismos" },
    { label: "Marca", href: "marca.html", page: "marca" },
    { group: "SISTEMA" },
    { label: "Accesibilidad", href: "accesibilidad.html", page: "accesibilidad" },
  ];

  function buildSidebar(currentPage) {
    var html = '';
    html += '<div class="sidebar-brand">';
    html += '  <div class="sidebar-brand-mark">S</div>';
    html += '  <div>';
    html += '    <div class="sidebar-brand-name">SUELO</div>';
    html += '    <div class="sidebar-brand-version">v1.4.0</div>';
    html += '  </div>';
    html += '</div>';
    html += '<hr class="sidebar-divider" />';
    NAV_ITEMS.forEach(function (item) {
      if (item.group) {
        html += '<div class="sidebar-group-label">' + item.group + '</div>';
        return;
      }
      var activeClass = item.page === currentPage ? ' is-active' : '';
      html += '<a class="sidebar-link' + activeClass + '" href="' + item.href + '">' + item.label + '</a>';
    });
    html += '<div class="sidebar-spacer"></div>';
    html += '<div class="sidebar-footer">Powered by SUELO DS</div>';
    return html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var mount = document.getElementById('sidebar-root');
    if (!mount) return;
    var currentPage = document.body.getAttribute('data-page') || '';
    mount.innerHTML = buildSidebar(currentPage);
  });
})();
