import { getCartFromLS } from "../cart/localStorageHandler.js";

//   function createBadgeCounter(contadorTotal){
//       return `<span id="contadorTotal" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger hidden">
//   ${contadorTotal}
//               </span>`
//   }

export function updateBadgeCounter() {

    let contadorTotal = 0
    const carrito = getCartFromLS()
    carrito.forEach(element => {
        contadorTotal += element.cantidad  
    })
    
    

    if (contadorTotal < 1){
        const removeCounter = document.getElementById("contadorTotal")
        removeCounter.remove("contadorTotal");
    } else {
        const contadorTotalContenedor = document.getElementById("contadorTotal")
        contadorTotalContenedor.innerHTML = contadorTotal            

    }
   
}

