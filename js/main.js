import { renderCartItems } from "./components/CartSidebar.js";
import fetchProducts from "./data/fetchProducts.js";
import { renderProducts } from "./utils/render.js";
import { getCartFromLS, deleteCartFromLS } from "./cart/localStorageHandler.js";
import { setupSearch } from "./utils/searchHandler.js"


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
});

renderProducts(products, containerId);
