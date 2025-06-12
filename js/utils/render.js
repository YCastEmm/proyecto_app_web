// funcion para renderizar todos los productos en el dom usando createProductCard que se importa de ProductCard
// se exporta renderProducts que recibe un array de productos y el id de contenedor del html en el que se insertan las cards
// por cada producto genera la card y la inserta en el dom
// antes de renderizar limpia el contenido del contenedor

import { createProductCard } from "../components/ProductCard.js";
import showProductModal from "../components/ProductModal.js";



export function renderProducts(arrayProducts, containerId){
    
    const container = document.getElementById(containerId)
    
    if(arrayProducts.length > 0) {
        container.innerHTML= ''
        arrayProducts.forEach(producto => {
            container.innerHTML += createProductCard(producto)            
        });
    } else {
        console.error("no se pudieron cargar los productos")
    }

    document.querySelectorAll(".btn-vermas").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const id = Number(event.target.dataset.id);
            const producto = arrayProducts.find((product) => product.id === id);
            showProductModal(producto); 
        });
    });

}

