import { getCartFromLS } from "../cart/localStorageHandler.js";

//   function createBadgeCounter(contadorTotal){
//       return `<span id="contadorTotal" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger hidden">
//   ${contadorTotal}
//               </span>`
//   }

export function updateBadgeCounter(a) {

    let contadorTotal = 0
    const carrito = getCartFromLS()
    carrito.forEach(element => {
        contadorTotal += element.cantidad  
    })
    if (carrito.length == null || contadorTotal == 0){
        const viewCounter = document.getElementById("contadorTotal")
        viewCounter.classList.add("visually-hidden")
    } else {
        const contadorTotalContenedor = document.getElementById("contadorTotal")
        contadorTotalContenedor.innerHTML = contadorTotal
        contadorTotalContenedor.classList.remove("visually-hidden")       

    }
   
}

