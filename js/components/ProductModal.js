// Esta funcion muestra el modal con los detalles de un producto
// Debe tener boton para cerrar y otro para agregar al carrito
// tiene que exportar showProductModal(product)

const showProductModal = (producto) => {
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
            <img src="${producto.image}" class="img-thumbnail col" alt="${producto.title}">
            <div class="col">
                <div class="row row-cols-2">
                    <h5 class="col">Precio</h5>
                    <h5 class="col">USD ${producto.price}</h5>
                    <p class="col">Categoría</p>
                    <p class="col">${producto.category}</p>
                    <p class="col">Puntaje</p>
                    <p class="col">${producto.rating.rate}</p>
                    <p class="col">Cantidad</p>
                    <p class="col">${producto.cantidad}</p>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
    `;
  footer.insertAdjacentElement("afterend", div);

  const myModal = new bootstrap.Modal(document.getElementById("detalleProducto"));
  myModal.show();

};

export default showProductModal;
