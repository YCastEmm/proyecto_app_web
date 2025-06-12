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
import { getCartFromLS } from "./cart/localStorageHandler.js"


const products = await fetchProducts("https://fakestoreapi.com/products");
const cartBtn = document.getElementById("cartToggleBtn");
const closeBtn = document.getElementById("btn-close");
const cartSidebar = document.getElementById("cart-sidebar");
const containerId = "productList";


// TODO: Falta implemetar la lógica de búsqueda


cartBtn.addEventListener("click", () => {
    cartSidebar.toggleAttribute("hidden");
    const cartActual = getCartFromLS();
    renderCartItems(cartActual);
});

closeBtn.addEventListener("click", () => {
    cartSidebar.toggleAttribute("hidden");
});


renderProducts(products, containerId);
