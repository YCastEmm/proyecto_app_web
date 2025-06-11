// este archivo se encarga de mostrar el sidebar del carrito
// importa las funciones de cartManager y de localStarageHandler
// cuando el usuario apreta el icono del carrito, se tiene que abrir este panel con los productos agregados

// por cada producto en el carrito, hay que mostrar:
// - imagen
// - titulo
// - precio unitario y precio total (precio * cantidad)
// - boton (-) para restar cantidad (deshabilitado si la cantidad es 1)
// - boton (+) para sumar cantidad
// - boton eliminar para sacar ese producto del carrito

// tambien tiene que haber:
// - un boton para eliminar todos los productos del carrito
// - un boton "finalizar compra" que borre todo y muestre un mensaje al usuario (tipo alert o sweetalert)

// cada vez que se toca un boton, se deberia actualizar el DOM del carrito y el localStorage

// exportar la funcion showCartSidebar(cartItems), que se encarga de armar el HTML y mostrarlo
// si pinta, tambien pueden tener funciones como updateCartSidebar() o closeCartSidebar() para modularizar mas

import { removeFromCart, updateQuantity } from "../cart/cartManager.js";
import { createCartItem } from "../components/CartItem.js";

const totalPriceElement = document.getElementById("precio-total");
let totalPrice = 0;

// muestra el
export const renderCartItems = (cartArray) => {
    const cartContainer = document.getElementById("cart-items");
    let cartHtml = ``;

    cartArray.forEach((producto) => {
        // TODO: Reemplazar cart por cartArray cuando esté temriando
        const htmlProducto = createCartItem(producto);
        cartHtml += htmlProducto;
    });

    cartContainer && (cartContainer.innerHTML = cartHtml);

    // listener para restar un producto al carrito
    document.querySelectorAll(".btn-restar").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const id = Number(event.target.dataset.id);
            const producto = cartArray.find((product) => product.id === id);
            const nuevoCart = updateQuantity(cartArray, id, producto.cantidad - 1);
            totalPrice += producto.price;
            updateCartSidebar(nuevoCart); // función que re-renderiza el carrito
        });
    });

    // listener para sumar un producto al carrito
    document.querySelectorAll(".btn-sumar").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const id = Number(event.target.dataset.id);
            const producto = cartArray.find((product) => product.id === id);
            const nuevoCart = updateQuantity(cartArray, id, producto.cantidad + 1);
            totalPrice += producto.price;
            updateCartSidebar(nuevoCart); // función que re-renderiza el carrito
        });
    });


    // listener para eliminar los productos del carrito
    document.querySelectorAll(".btn-eliminar").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const id = Number(event.currentTarget.dataset.id);
            const producto = cartArray.find((product) => product.id === id);
            const nuevoCart = removeFromCart(cartArray, id);
            totalPrice -= producto.price * producto.cantidad;
            updateCartSidebar(nuevoCart);
        });
    });
};

export const updateCartSidebar = (carrito) => {
    console.log(carrito);

    totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
    renderCartItems(carrito);
};
