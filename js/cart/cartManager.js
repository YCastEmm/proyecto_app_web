// aca se maneja la logica del carrito: agregar, borrar y modificar la cantidad de productos
// no toca el dom ni guarda nada en localstorage, solo trabaja sobre el array del carrito
// exporta las funciones:
// - addToCart(product): agrega un producto o suma uno si ya existe
// - removeFromCart(id): elimina un producto del carrito por id
// - updateQuantity(id, cantidad): actualiza la cantidad de un producto especifico
// todas las funciones devuelven el array del carrito actualizado

/**
 * Agrega un producto al carrito. Si ya existe, incrementa su cantidad.
 * @param {Array} cart - Array actual del carrito.
 * @param {Object} product - Producto a agregar.
 * @returns {Array} Carrito actualizado.
 */
export function addToCart(cart, product) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
        cart[index].cantidad += 1;
    } else {
        cart.push({ ...product, cantidad: 1 });
    }
    return cart;
}

/**
 * Elimina un producto del carrito por ID.
 * @param {Array} cart - Array actual del carrito.
 * @param {number|string} id - ID del producto a eliminar.
 * @returns {Array} Carrito actualizado.
 */
export function removeFromCart(cart, id) {
    return cart.filter((item) => item.id !== id);
}

/**
 * Actualiza la cantidad de un producto específico.
 * @param {Array} cart - Array actual del carrito.
 * @param {number|string} id - ID del producto a modificar.
 * @param {number} cantidad - Nueva cantidad.
 * @returns {Array} Carrito actualizado.
 */
export function updateQuantity(cart, id, cantidad) {
    return cart.map((item) => (item.id === id ? { ...item, cantidad } : item));
}
