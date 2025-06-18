// Esta funcion muestra el modal con los detalles de un product
// Debe tener boton para cerrar y otro para agregar al carrito
// tiene que exportar showProductModal(product)

import {addToCart, updateQuantity, removeFromCart} from "../cart/cartManager.js";
import { getCartFromLS, saveCartToLS } from "../cart/localStorageHandler.js";
import { renderCartItems } from "./CartSidebar.js";

const showProductModal = (product) => {
  //Descargar el carrito.
  const cartLS = getCartFromLS();
  //si existe en el carrito, se le agrega la cantidad correspondiente
  product.cantidad = cartLS.find((item) => item.id === product.id)?.cantidad || 0;

  // Función auxiliar para crear filas de detalles
  const createDetailRow = (label, value) => `
    <p class="col flex-fill">${label}</p>
    <p class="col flex-fill">${value}</p>
  `;

  const footer = document.querySelector("footer");

  //creo el elemento div que contiene la ventana modal
  const div = document.createElement("div");
  div.id = "detalleProduct";
  div.classList = "modal fade";
  div.tabIndex = -1;
  div.innerHTML = `
  
    <div class="modal-dialog container-fluid">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${product.title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-row justify-content-around align-items-center">
          <img src="${product.image}" class="rounded mx-2 col-4" alt="${product.title}">
          <div class="col-7">
            <div class="row row-cols-2 ms-3">
              ${createDetailRow("Precio", `US$ ${product.price}`)}
              ${createDetailRow("Categoría", product.category)}
              ${createDetailRow("Puntaje", product.rating.rate)}
              ${createDetailRow("Stock", product.rating.count)}
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex flex-row justify-content-around align-items-center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
          <div class="d-flex align-items-center mt-2">
            <button class="btn btn-cantidad" id="restar">-</button>
            <span id="spanCantidad" class="cantidad fw-bold text-center mx-2">${product.cantidad}</span>
            <button class="btn btn-cantidad" id="sumar">+</button>
          </div>
        </div>
      </div>
    </div>
    `;
  //Lo inserto luego del footer
  footer.insertAdjacentElement("afterend", div);

  const restar = document.querySelector("#restar");
  //verifico si la cantidad del producto es menor que cero
  //en caso afirmativo, coloco la clase "d-none" al elemento
  product.cantidad < 1 && restar.classList.add("d-none");

  const sumar = document.querySelector("#sumar");

//Funcion auxiliar para guardar en LS y actualizar cantidad.
  const endListener = (newCart) => {
    saveCartToLS(newCart);
    document.querySelector("#spanCantidad").innerHTML = product.cantidad;
    renderCartItems(newCart)
  }


//creo el listener de "restar" y su logica
  restar.addEventListener("click", () => {
    let cartUpdated;
    if (product.cantidad > 1) {
      product.cantidad -= 1;
      cartUpdated = updateQuantity(cartLS, product.id, product.cantidad);

    } else {
      product.cantidad = 0;
      cartUpdated = removeFromCart(cartLS, product.id);
      restar.classList.add("d-none");

    }
    endListener(cartUpdated)
  });

  //creo el listener de sumar y su logica
  sumar.addEventListener("click", () => {
    let cartUpdated;
    product.cantidad += 1;
    if (product.cantidad == 1) {
      cartUpdated = addToCart(cartLS, product);
      restar.classList.remove("d-none");

    } else if (product.cantidad > 0 && product.cantidad <= product.rating.count) {
      cartUpdated = updateQuantity(cartLS, product.id, product.cantidad);

    } else if (product.cantidad > product.rating.count) {
      product.cantidad = product.rating.count;
      cartUpdated = updateQuantity(cartLS, product.id, product.cantidad);
      console.log("stock máximo alcanzado");
      
    } else {
      product.cantidad = 0;
      cartUpdated = removeFromCart(cartLS, product.id);

    }
    endListener(cartUpdated)
  });

  const myModal = new bootstrap.Modal(
    document.getElementById("detalleProduct")
  );
  myModal.show();

// al cerrar la ventana modal, eliminamos el elemento HTML creado 
  const cierreModal =  document.getElementById("detalleProduct")
  cierreModal.addEventListener("hidden.bs.modal", () => {
  cierreModal.remove()
});

};

export default showProductModal;