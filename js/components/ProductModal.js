import { addToCart, updateQuantity, removeFromCart } from "../cart/cartManager.js";
import { getCartFromLS, saveCartToLS } from "../cart/localStorageHandler.js";
import { renderCartItems } from "./CartSidebar.js";
import { createNotification } from "./Notification.js";

const showProductModal = (product) => {
    //Descargar el carrito.
    const cartLS = getCartFromLS();
    //si existe en el carrito, se le agrega la cantidad correspondiente
    product.cantidad = cartLS.find((item) => item.id === product.id)?.cantidad || 0;

    // Función auxiliar para crear filas de detalles
    const createDetailRow = (label, value) =>
      ` <div class="row d-flex justify-content-between">
          <p class="col-5">${label}</p>
          <p class="col-7">${value}</p>
        </div>
      `;

    const body = document.querySelector("body");

    //creo el elemento div que contiene la ventana modal
    const div = document.createElement("div");
    div.id = "detalleProduct";
    div.classList = "modal fade";
    div.tabIndex = -1;
    div.innerHTML = `
                      <div class="modal-dialog">
                        <div class="modal-content">
                        <!-- Header -->
                          <div class="modal-header">
                            <h5 class="modal-title">${product.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                        <!-- body -->
                          <div class="modal-body">
                            <div class="row justify-content-center align-items-center">
                              <img src="${product.image}" class="rounded mx-1 col-sm-4 col-6" alt="${product.title}">
                              <div class="col-sm-6 col-9 mt-4">
                                ${createDetailRow("Precio", `US$ ${product.price}`)}
                                ${createDetailRow("Categoría", product.category)}
                                ${createDetailRow("Puntaje", product.rating.rate)}
                                ${createDetailRow("Stock", product.rating.count)}
                              </div>
                            </div>
                          </div>

                        <!-- Footer -->
                          <div class="modal-footer d-flex flex-row justify-content-center align-items-center">
                              <button id="restar" class="btn btn-agregar">-</button>
                              <span id="spanCantidad" class="cantidad fw-bold text-center mx-2">${product.cantidad}</span>
                              <button id="sumar" class="btn btn-agregar">+</button>
                              <button id="agregar" class="card-btn btn-hover-effect">Agregar al carrito</button>
                          </div>
                        </div>
                      </div>
                    `;

    //Lo inserto luego del footer
    body.insertAdjacentElement("beforeend", div);

    // Selecciono todos los elementos del la botonera del modal
    const restar = document.querySelector("#restar");
    const sumar = document.querySelector("#sumar");
    const cantidad = document.querySelector("#spanCantidad");
    const agregar = document.querySelector("#agregar");

    //Funcion auxiliar de modificacion de modal-footer
    const verificarBotones = () => {
      if (product.cantidad < 1) {
        restar.classList.add("d-none");
        sumar.classList.add("d-none");
        cantidad.classList.add("d-none");
        agregar.classList.remove("d-none");
      }else{
        restar.classList.remove("d-none");
        sumar.classList.remove("d-none");
        cantidad.classList.remove("d-none");
        agregar.classList.add("d-none");
      }
    }

    verificarBotones()

    //Funcion auxiliar para guardar en LS y actualizar cantidad.
    const endListener = (newCart) => {
      saveCartToLS(newCart);
      cantidad.innerHTML = product.cantidad;
      renderCartItems(newCart);
    };

    //creo el listener de "restar" y su logica
    restar.addEventListener("click", () => {
        let cartUpdated;

        if (product.cantidad > 1) {
            product.cantidad -= 1;
            cartUpdated = updateQuantity(cartLS, product.id, product.cantidad);
        } else {
            product.cantidad = 0;
            cartUpdated = removeFromCart(cartLS, product.id);
        }
        verificarBotones()
        createNotification("Se eliminó el producto del carrito.");
        endListener(cartUpdated);
    });

    //creo el listener de sumar y su logica
    sumar.addEventListener("click", () => {
        let cartUpdated;
        product.cantidad += 1;
        
        if (product.cantidad > 0 && product.cantidad <= product.rating.count) {
          cartUpdated = updateQuantity(cartLS, product.id, product.cantidad);
        } else if (product.cantidad > product.rating.count) {
          product.cantidad = product.rating.count;
          cartUpdated = updateQuantity(cartLS, product.id, product.cantidad);
          console.log("stock máximo alcanzado");
        }
        createNotification("Se agregó el producto al carrito.");
        endListener(cartUpdated);
    });

    agregar.addEventListener("click", () => {
        let cartUpdated;
        product.cantidad += 1;
        if (product.cantidad == 1) {
            cartUpdated = addToCart(cartLS, product);

        } else if (product.cantidad > 1 && product.cantidad <= product.rating.count) {
            cartUpdated = updateQuantity(cartLS, product.id, product.cantidad);
        } else if (product.cantidad > product.rating.count) {
            product.cantidad = product.rating.count;
            cartUpdated = updateQuantity(cartLS, product.id, product.cantidad);
            console.log("stock máximo alcanzado");
        }
        verificarBotones();
        createNotification("Se agregó el producto al carrito.");
        endListener(cartUpdated);
    });


    const myModal = new bootstrap.Modal(document.getElementById("detalleProduct"));
    myModal.show();

    // al cerrar la ventana modal, eliminamos el elemento HTML creado
    const cierreModal = document.getElementById("detalleProduct");
    cierreModal.addEventListener("hidden.bs.modal", () => {
        cierreModal.remove();
    });
};

export default showProductModal;
