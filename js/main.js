// este archivo es el punto de entrada principal de la app
// importa funciones desde: fetchProducts, render, productmodal, cartsidebar, cartmanager y localstoragehandler
// se encarga de iniciar todo cuando carga la pagina:
// - ejecuta fetchProducts para obtener los productos
// - llama a renderProducts para mostrarlos en el dom
// - escucha eventos globales:
//   - busqueda de productos desde el input
//   - apertura y cierre del carrito
//   - clic en los botones ver mas para abrir el modal
// - coordina el uso del carrito: agrega productos, actualiza cantidades, guarda en localstorage y actualiza el sidebar

import { renderCartItems } from "./components/CartSidebar.js";
import fetchProducts from "./data/fetchProducts.js";
import { renderProducts } from "./utils/render.js";
import { getCartFromLS, deleteCartFromLS } from "./cart/localStorageHandler.js";
import { setupSearch } from "./utils/searchHandler.js"
import { updateBadgeCounter } from "./components/BadgeCounter.js";


const products = await fetchProducts("https://fakestoreapi.com/products");
const cartBtn = document.getElementById("cartToggleBtn");
const closeBtn = document.getElementById("btn-close");
const cartSidebar = document.getElementById("cart-sidebar");
const containerId = "productList";
const checkoutBtn = document.getElementById("checkoutBtn");
const vaciarBtn = document.getElementById("vaciarCarritoBtn");


setupSearch(products, "searchInput", renderProducts, containerId);

// Listener de boton del carrito
cartBtn.addEventListener("click", () => {
    const cartActual = getCartFromLS();
    cartSidebar.toggleAttribute("hidden");
    renderCartItems(cartActual);
});

// Listener para cerrar el carrito
closeBtn.addEventListener("click", () => {
    cartSidebar.toggleAttribute("hidden");
});

// Listener de finalizar compra
checkoutBtn.addEventListener("click", () => {
    deleteCartFromLS()
    window.location.href = "./checkout.html" 
});

// Listener para vaciar el carrito
vaciarBtn.addEventListener("click", () => {
    deleteCartFromLS()
    renderCartItems([]);
    updateBadgeCounter()
});

renderProducts(products, containerId);
