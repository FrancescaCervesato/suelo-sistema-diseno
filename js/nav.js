// SUELO Design System — inyecta el sidebar de navegación en cada página
// y marca como activo el link de la página actual (data-page en <body>).
(function () {
  var NAV_ITEMS = [
    { label: "Inicio", href: "index.html", page: "inicio" },
    { group: "TOKENS" },
    { label: "Colores", href: "tokens-de-color.html", page: "tokens-de-color" },
    { label: "Tipografía y espaciado", href: "tipografia.html", page: "tipografia" },
    { group: "FUNDAMENTOS" },
    { label: "Marca", href: "marca.html", page: "marca" },
    { label: "Accesibilidad", href: "accesibilidad.html", page: "accesibilidad" },
    { group: "ÁTOMOS" },
    { label: "Botón", href: "atomo-boton.html", page: "atomo-boton" },
    { label: "Checkbox", href: "atomo-checkbox.html", page: "atomo-checkbox" },
    { label: "Radio button", href: "atomo-radio-button.html", page: "atomo-radio-button" },
    { label: "Chips", href: "atomo-chips.html", page: "atomo-chips" },
    { label: "Input", href: "atomo-input.html", page: "atomo-input" },
    { label: "Select", href: "atomo-select.html", page: "atomo-select" },
    { label: "Toggle", href: "atomo-toggle.html", page: "atomo-toggle" },
    { label: "Tag / Badge", href: "atomo-tag.html", page: "atomo-tag" },
    { label: "Spinner", href: "atomo-spinner.html", page: "atomo-spinner" },
    { label: "Trends", href: "atomo-trends.html", page: "atomo-trends" },
    { group: "MOLÉCULAS" },
    { label: "Botón segmentado", href: "molecula-boton-segmentado.html", page: "molecula-boton-segmentado" },
    { label: "Breadcrumbs", href: "molecula-breadcrumbs.html", page: "molecula-breadcrumbs" },
    { label: "Cards", href: "molecula-cards.html", page: "molecula-cards" },
    { label: "Desplegable", href: "molecula-desplegable.html", page: "molecula-desplegable" },
    { label: "Empty state", href: "molecula-empty-state.html", page: "molecula-empty-state" },
    { label: "Modal", href: "molecula-modal.html", page: "molecula-modal" },
    { label: "Paginador", href: "molecula-paginador.html", page: "molecula-paginador" },
    { label: "Progress bar", href: "molecula-progress-bar.html", page: "molecula-progress-bar" },
    { label: "Stepper", href: "molecula-stepper.html", page: "molecula-stepper" },
    { label: "Tabs", href: "molecula-tabs.html", page: "molecula-tabs" },
    { label: "Toast / Sticker", href: "molecula-toast.html", page: "molecula-toast" },
    { label: "Tooltip", href: "molecula-tooltip.html", page: "molecula-tooltip" },
    { label: "Selector múltiple", href: "molecula-selector-multiple.html", page: "molecula-selector-multiple" },
    { label: "Uploader", href: "molecula-uploader.html", page: "molecula-uploader" },
    { group: "ORGANISMOS" },
    { label: "Sidebar / Navegación lateral", href: "organismo-sidebar.html", page: "organismo-sidebar" },
    { label: "Navbar / Navegación superior", href: "organismo-navbar.html", page: "organismo-navbar" },
    { label: "Tablas", href: "organismo-tablas.html", page: "organismo-tablas" },
    { label: "Gráfico de torta", href: "organismo-grafico-torta.html", page: "organismo-grafico-torta" },
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
