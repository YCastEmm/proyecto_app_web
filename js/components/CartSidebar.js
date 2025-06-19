import { removeFromCart, updateQuantity } from "../cart/cartManager.js";
import { createCartItem } from "../components/CartItem.js";
import { saveCartToLS } from "../cart/localStorageHandler.js"

const totalPriceElement = document.getElementById("precio-total");
const checkoutBtn = document.getElementById("checkoutBtn");



export const renderCartItems = (cartArray) => {
    const cartContainer = document.getElementById("cart-items");
    const totalContainer = document.getElementById("cartTotalContainer");
    const totalPriceElement = document.getElementById("precio-total");

    
    let cartHtml = ``;
    
    if (cartArray.length === 0) {
        cartHtml = `<div class="d-flex justify-content-center align-items-center text-muted py-5 w-100">
                        <p class="mb-0">No hay productos en el carrito.</p>
                    </div>`;
    } else {
        cartArray.forEach((producto) => {
            cartHtml += createCartItem(producto);
        });
    }
    

    // Mostrar u ocultar Total + Botón de Finalizar
    if (cartArray.length === 0) {
        totalContainer.setAttribute("hidden", true);
    } else {
        totalContainer.removeAttribute("hidden");
        const totalPrice = cartArray.reduce((acc, item) => acc + item.price * item.cantidad, 0);
        totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
    }


    cartContainer.innerHTML = cartHtml

    // listener para sumar un producto al carrito
    document.querySelectorAll(".btn-sumar").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const id = Number(event.target.dataset.id);
            const producto = cartArray.find((product) => product.id === id);
            const nuevoCart = updateQuantity(cartArray, id, producto.cantidad + 1);
            updateCartSidebar(nuevoCart)
            saveCartToLS(nuevoCart); 
        });
    });
    
    
    // listener para restar un producto al carrito
    document.querySelectorAll(".btn-restar").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const id = Number(event.target.dataset.id);
            const producto = cartArray.find((product) => product.id === id);
            const nuevoCart = updateQuantity(cartArray, id, producto.cantidad - 1);
            
            const productoActualizado = nuevoCart.find((p) => p.id === id);
            
            if (productoActualizado.cantidad < 1) {
                const carritoSinProducto = removeFromCart(nuevoCart, id);
                updateCartSidebar(carritoSinProducto);
                saveCartToLS(carritoSinProducto)
            } else {
                updateCartSidebar(nuevoCart);
                saveCartToLS(nuevoCart)
            }            
        });
    });


    // listener para eliminar los productos del carrito
    document.querySelectorAll(".btn-eliminar").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const id = Number(event.currentTarget.dataset.id);
            const nuevoCart = removeFromCart(cartArray, id);
            updateCartSidebar(nuevoCart);
            saveCartToLS(nuevoCart)
        });
    });
    
    // Listener para vaciar el carrito
    const vaciarBtn = document.getElementById("vaciarCarritoBtn");
    if (vaciarBtn) {
        vaciarBtn.addEventListener("click", () => {
            const carritoVacio = [];
            updateCartSidebar(carritoVacio);
            saveCartToLS(carritoVacio);
        });
    }
};

export const updateCartSidebar = (carrito) => {
    const totalPrice = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
    totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`; 
    renderCartItems(carrito);
};
