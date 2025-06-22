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
        container.innerHTML= '<h2 class="text-center mt-5 text-body-tertiary">No se encontraron productos</h2>'
    }

    document.querySelectorAll(".btn-vermas").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const id = Number(event.target.dataset.id);
            const producto = arrayProducts.find((product) => product.id === id);
            showProductModal(producto); 
        });
    });
}

