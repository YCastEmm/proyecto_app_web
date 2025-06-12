// Esta funcion muestra el modal con los detalles de un producto
// Debe tener boton para cerrar y otro para agregar al carrito
// tiene que exportar showProductModal(product)

import { addToCart } from "../cart/cartManager.js";
import { getCartFromLS, saveCartToLS } from "../cart/localStorageHandler.js";


const showProductModal = (producto) => {
    //Descargar el carrito.
    const cartLS = getCartFromLS()
    const [ prodCart ] = cartLS.filter(el => el.id === producto.id)
    console.log(prodCart)
    console.log(cartLS)

  const footer = document.querySelector("footer");
  const div = document.createElement("div");
  div.id = "detalleProducto";
  div.classList.add("modal");
  div.classList.add("fade");
  div.tabIndex = -1;
  div.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">${producto.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body row">
            <img src="${producto.image}" class="img-thumbnail col-4 ms-4" alt="${producto.title}">
            <div class="col">
                <div class="row row-cols-2">
                    <h5 class="col">Precio</h5>
                    <h5 class="col">USD ${producto.price}</h5>
                    <p class="col">Categoría</p>
                    <p class="col">${producto.category}</p>
                    <p class="col">Puntaje</p>
                    <p class="col">${producto.rating.rate}</p>
                    <p class="col">Stock</p>
                    <p class="col">${producto.rating.count}</p>
                </div>
            </div>
        </div>
        <div class="modal-footer">

        </div>
        </div>
    </div>
    `;
  footer.insertAdjacentElement("afterend", div);

    //Si en el carrito no se encuentra el producto, el boton de restar desaparece, la cantidad se muestra en 0 y el boton de sumar se muestra.
    if (condition) {
        let modalFooter = document.querySelector(".modal-footer");
        const div = document.createElement("div")
    }
    //Si el carrito ya tiene al menos una unidad del producto, se muestra restar, cantidad y sumar
    
    //Si el stock del producto es menor que la cantidad, fuerza cantidad = stock y debería mostrar un mensaje

  document.getElementById("btn-add-carrito").addEventListener("click", () => {
    const carritoActualizado = addToCart(cartLS, producto);
    saveCartToLS(carritoActualizado);
  });

  const myModal = new bootstrap.Modal(
    document.getElementById("detalleProducto")
  );
  myModal.show();
};

export default showProductModal;
