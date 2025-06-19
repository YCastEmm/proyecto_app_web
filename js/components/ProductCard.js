// crea una card de producto
export function createProductCard(producto){
    return `<div class="card text-center" style="width: 18rem;">
                <img src="${producto.image}" class="card-img-top img-thumbnail card-image" alt="">
                <div class="card-body d-flex flex-column justify-content-between align-items-center">
                    <h5 class="card-title">${producto.title}</h5>
                    <h5 class="price">$${producto.price}</h5>
                    <a href="#" class="card-btn btn-hover-effect btn-vermas" data-id="${producto.id}">VER MÁS</a>
                </div>
            </div>
`
}
