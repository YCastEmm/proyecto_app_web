import { getCartFromLS } from "../cart/localStorageHandler.js";

function createBadgeCounter(contadorTotal){
    return `<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
${contadorTotal}
            </span>`
}




export function updateBadgeCounter() {

    let contadorTotal = 0
    const carrito = getCartFromLS()
    carrito.forEach(element => {
        contadorTotal += element.cantidad 

    });

    const contadorTotalContenedor = document.getElementById("contadorTotal")
    contadorTotalContenedor.innerHTML = contadorTotal    

}

