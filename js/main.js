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


import { showCartSidebar } from "./components/CartSidebar.js"
import { fetchProducts } from "./data/fetchProducts.js"
import { renderProducts } from "./utils/render.js"

const cartBtn = document.getElementById("cartToggleBtn")
const sidebar = document.getElementById("sidebar")
const containerId = "productList"

cartBtn.addEventListener("click", () => {
    sidebar.toggleAttribute("hidden")
    showCartSidebar()
})

const products = await fetchProducts("https://fakestoreapi.com/products")
console.log(products);


renderProducts(products, containerId)

