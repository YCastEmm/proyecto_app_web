/**
 * searchHandler.js
 * 
 * Este módulo se encarga de configurar la búsqueda en vivo.
 * No guarda ni renderiza productos por sí solo: usa la función externa `renderProducts`.
 */

/**
 * @param {Array} products
 * @param {string} inputId
 * @param {Function} renderProducts
 * @param {string} containerId 
 */
export function setupSearch(products, inputId, renderProducts, containerId) {
  const searchInput = document.getElementById(inputId);

  if (!searchInput) {
    console.error(`No se encontró el input de búsqueda con id: ${inputId}`);
    return;
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const filtered = products.filter(p =>
      p.title.toLowerCase().includes(query)
    );

    renderProducts(filtered, containerId);
  });
}