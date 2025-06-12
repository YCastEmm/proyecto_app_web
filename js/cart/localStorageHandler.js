// aca se guarda y se lee el carrito desde localstorage
// no hace ningun tipo de logica ni renderizado, solo persiste los datos
// exporta las funciones:
// - saveCartToLS(cart): recibe un array de productos y lo guarda como string en localstorage
// - getCartFromLS(): devuelve el carrito desde localstorage (parseado como array), o un array vacio si no hay nada guardado
// este archivo no importa ninguna funcion y no depende de otros modulos

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
