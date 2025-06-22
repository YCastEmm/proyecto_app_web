import { getCartFromLS } from "../cart/localStorageHandler.js";

const viewCounter = document.getElementById("contadorTotal")

export function updateBadgeCounter() {

    let contadorTotal = 0
    const carrito = getCartFromLS()
    carrito.forEach(element => {
        contadorTotal += element.cantidad  
    })
    if (carrito.length === 0 || contadorTotal == 0){
        viewCounter.classList.add("visually-hidden")
    } else {
        viewCounter.innerHTML = contadorTotal
        viewCounter.classList.remove("visually-hidden")       
    }   
}

