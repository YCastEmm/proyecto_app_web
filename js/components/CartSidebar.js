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


// ! ARRAY DE PRUEBA PARA ARMAR EL CARRITO
const cart = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: {
            rate: 4.7,
            count: 500,
        },
    },
];

// Retorna el html de cada item del carrito
const createCartCard = (cartItem) => {
    return `
                <div class="card text-center mb-3" style="width: 18rem">
                    <img src="${cartItem.image}" class="card-img-top img-thumbnail card-image" alt="" />
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">${cartItem.title}</h5>
                        <p class="mb-1">Precio unitario: $${cartItem.price}</p>
                        <div class="d-flex justify-content-center align-items-center gap-2 my-2">
                            <button class="btn btn-primary card-btn">-</button>
                            <span class="fw-bold">${cartItem.quantity}</span>
                            <button class="btn btn-primary card-btn">+</button>
                        </div>
                        <p class="mt-2">Total: $${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
                    </div>
                </div>
            `
} 




export const showCartSidebar = (cartArray) => {
    
    const cartContainer = document.getElementById("cartContainer")

    let cartHtml = ``

    cart.forEach(producto => { // TODO: Reemplazar cart por cartArray cuando esté temriando
        const htmlProducto = createCartCard(producto)
        cartHtml += htmlProducto
    });

    cartContainer && (cartContainer.innerHTML = cartHtml)
}