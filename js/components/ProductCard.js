// este componente recibe un objeto producto y devuelve un string html con la card armada
// se usa en render.js para generar el contenido de cada producto
// se exporta la funcion createProductCard que toma un objeto producto como parametro

function createProductCard(producto){
    return `<div class="card" style="width: 18rem;">
                <img src="${producto.image}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <h5 class="price">${producto.price}</h5>
                    <p class="card-text">${producto.description}</p>
                    <a href="#" class="btn btn-primary">VER MÁS</a>
                </div>
            </div>
`
}
