// Retorna el html de cada item del carrito
export const createCartItem = (cartItem) => {
    return `
                <div class="d-flex justify-content-between align-items-start mb-4">
                    <div>
                        <div class="cartItemTitle">${cartItem.title}</div>
                        <div class="d-flex align-items-center mt-2">
                            <button class="btn btn-cantidad btn-restar" data-id="${cartItem.id}">-</button>
                            <span class="cantidad fw-bold text-center mx-2">${cartItem.cantidad}</span>
                            <button class="btn btn-cantidad btn-sumar" data-id="${cartItem.id}">+</button>
                        </div>
                    </div>
                    <div class="text-end">
                        <div class="fw-bold">$${(cartItem.price * cartItem.cantidad).toFixed(2)}</div>
                        <button class="btn btn-lg text-danger mt-1 p-0 btn-eliminar" data-id="${cartItem.id}"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            `
} 