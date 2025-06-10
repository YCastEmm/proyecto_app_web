// este componente recibe un objeto producto y devuelve un string html con la card armada
// se usa en render.js para generar el contenido de cada producto
// se exporta la funcion createProductCard que toma un objeto producto como parametro
// 
// aca se puede ver un ejemplo de como seria el objeto de un producto
// {
// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating": {
// "rate": 3.9,
// "count": 120
// }


function createProductCard(producto){
    return `<div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <h5 class="price">${product.price}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="#" class="btn btn-primary">VER MÁS</a>
                </div>
            </div>
`
}

//Preguntar si el contenido del objeto está bien, o si tengo q agregarle los demás datos.
