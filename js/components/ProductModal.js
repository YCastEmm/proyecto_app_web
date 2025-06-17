// Esta funcion muestra el modal con los detalles de un product
// Debe tener boton para cerrar y otro para agregar al carrito
// tiene que exportar showProductModal(product)

import { addToCart, updateQuantity, removeFromCart } from "../cart/cartManager.js";
import { getCartFromLS, saveCartToLS } from "../cart/localStorageHandler.js";

const showProductModal = (product) => {
  //Descargar el carrito.
  const cartLS = getCartFromLS();
  //si existe en el carrito, se le agrega la cantidad correspondiente
  product.cantidad = cartLS.find(item => item.id === product.id)?.cantidad || 0;

  // Función auxiliar para crear filas de detalles
  const createDetailRow = (label, value) => `
    <p class="col">${label}</p>
    <p class="col">${value}</p>
  `;

  const footer = document.querySelector("footer");

  const div = document.createElement("div");
  div.id = "detalleProduct";
  div.classList = "modal fade";
  div.tabIndex = -1;

  div.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
      <div class="modal-header">
          <h5 class="modal-title">${product.title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body row">
        <img src="${product.image}" class="img-thumbnail col-4 ms-4" alt="${product.title}">
        <div class="col">
          <div class="row row-cols-2">
              ${createDetailRow('Precio', `USD ${product.price}`)}
              ${createDetailRow('Categoría', product.category)}
              ${createDetailRow('Puntaje', product.rating.rate)}
              ${createDetailRow('Stock', product.rating.count)}
          </div>
        </div>
      </div>
        <div class="modal-footer d-flex flex-row justify-content-around align-items-center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
          <div class="d-flex align-items-center mt-2">
            <button class="btn btn-cantidad d-none" id="restar">-</button>
            <span id="spanCantidad" class="cantidad fw-bold text-center mx-2">${product.cantidad}</span>
            <button class="btn btn-cantidad" id="sumar">+</button>
          </div>
        </div>
      </div>
    </div>
    `;

  footer.insertAdjacentElement("afterend", div);

  const restar = document.querySelector("#restar")
  const sumar = document.querySelector("#sumar")

  if (restar) {
    restar.addEventListener("click", () => {
    let cartUpdated;
      if (product.cantidad > 1) {
        product.cantidad -= 1
        cartUpdated = updateQuantity(cartLS,product.id,product.cantidad)

      }else{
        product.cantidad = 0
        cartUpdated = removeFromCart(cartLS,product.id)
        restar.classList.add("d-none");
      }

      saveCartToLS(cartUpdated);
      document.querySelector("#spanCantidad").innerHTML = product.cantidad

    });
  }

  if (sumar) {
    sumar.addEventListener("click", () => {
    let cartUpdated;
    product.cantidad += 1
      if (product.cantidad == 1 ) {
        cartUpdated = addToCart(cartLS, product)
        restar.classList.remove("d-none");

      } else if (product.cantidad > 0 && product.cantidad <= product.rating.count) {
        cartUpdated = updateQuantity(cartLS,product.id,product.cantidad)
      } else if (product.cantidad > product.rating.count) {
        product.cantidad = product.rating.count
        cartUpdated = updateQuantity(cartLS,product.id,product.cantidad)
        console.log("stock maximo alcanzado")
      } else {
        product.cantidad = 0
        cartUpdated = removeFromCart(cartLS,product.id)
      }

      saveCartToLS(cartUpdated);
      document.querySelector("#spanCantidad").innerHTML = product.cantidad;
    });
  }

  const myModal = new bootstrap.Modal(
    document.getElementById("detalleProduct")
  );
  myModal.show();

};

export default showProductModal;
