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
