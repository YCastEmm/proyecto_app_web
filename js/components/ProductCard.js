// este componente recibe un objeto producto y devuelve un string html con la card armada
// se usa en render.js para generar el contenido de cada producto
// se exporta la funcion createProductCard que toma un objeto producto como parametro


export function createProductCard(producto){
    return `<div class="card text-center" style="width: 18rem;">
                <img src="${producto.image}" class="card-img-top img-thumbnail card-image" alt="">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${producto.title}</h5>
                    <h5 class="price">$${producto.price}</h5>
                    <a href="#" class="btn btn-primary card-btn">VER MÁS</a>
                </div>
            </div>
`
}
