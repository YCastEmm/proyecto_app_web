const CART_KEY = "carrito";

/**
 * Guarda el carrito en localStorage.
 * @param {Array} cart - Array de productos a guardar.
 */
export function saveCartToLS(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/**
 * Obtiene el carrito desde localStorage.
 * @returns {Array} El carrito como array, o array vacío si no hay datos.
 */
export function getCartFromLS() {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
}


// limpia el carrito del localStorage
export const deleteCartFromLS = () => {
    localStorage.removeItem(CART_KEY)
}


